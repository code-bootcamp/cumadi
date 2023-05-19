import { ChangeEvent, useEffect, useState } from 'react'
import PurchaseUI from './purchase.presenter'
import { useRouter } from 'next/router'
import { purchaseProduct } from '@/common/libraries/payment'
import { gql, useMutation, useQuery } from '@apollo/client'
import {
  IMutation,
  IMutationCreatePaymentSeriesArgs,
  IQuery,
  IQueryFetchSeriesArgs,
} from '@/common/types/generated/types'
import { CREATE_PAYMENT_SERIES, FETCH_SERIES, FETCH_USER_LOGGED_IN } from './purchase.queries'

declare const window: typeof globalThis & {
  IMP: any
}

export default function Purchase() {
  const router = useRouter()
  console.log(router) //  ***로그삭제
  // const [accessToken] = useRecoilState(accessTokenState)
  // const [seriesId, setSeriesId] = useRecoilState(buyItemId)

  const [seriesId, setSeriesId] = useState('')

  useEffect(() => {
    const buyNowSeries = localStorage.getItem('buySeriesId') || ''
    if (!buyNowSeries) {
      alert('상품을 찾을 수 없습니다. 메인페이지로 이동합니다.')
      router.push('/')
    }
    setSeriesId(buyNowSeries)
  }, [])

  console.log(seriesId) //  ***로그삭제

  const { data: loginData } = useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN)
  console.log(loginData)

  const { data } = useQuery<Pick<IQuery, 'fetchSeries'>, IQueryFetchSeriesArgs>(FETCH_SERIES, {
    variables: { seriesId },
  })
  console.log(data?.fetchSeries) //  ***로그삭제

  const [createPaymentSeries] = useMutation<Pick<IMutation, 'createPaymentSeries'>, IMutationCreatePaymentSeriesArgs>(
    CREATE_PAYMENT_SERIES,
  )

  const imageErrorVisible = (event: ChangeEvent<HTMLImageElement>) => {
    event.target.src = '/images/no-image.jpeg'
  }

  //  const [checkList] = useState(seriesItem) // 체크리스트 array일 때
  // const [checkList] = useState<Array<any>>([seriesItem]); // 체크리스트 object일 때 => object로 받은 데이터를 array로 변경

  //  console.log(checkList) //  ***로그삭제

  const onClickPayment = () => {
    console.log(seriesId)
    localStorage.removeItem('buySeriesId')

    const IMP = window.IMP
    IMP.init('imp71265174')

    // 결제창 호출
    IMP.request_pay(
      {
        pg: 'nice.nictest04m',
        pay_method: 'card',
        name: `시리즈 ${data?.fetchSeries.title} 구매`,
        amount: Number(data?.fetchSeries.price),
        buyer_email: loginData?.fetchUserLoggedIn.email,
        buyer_name: loginData?.fetchUserLoggedIn.nickname,
        m_redirect_url: `http://localhost:3000${router.pathname}`, // 모바일에서는 결제시, 결제페이지로 사이트가 이동되므로 돌아올시 주소입력(바로구매 페이지 또는 장바구니 페이지)
      },
      async (rsp: any) => {
        if (rsp.success) {
          console.log(rsp) //  ***로그삭제

          const result = await createPaymentSeries({
            variables: {
              createPaymentInput: {
                impUid: rsp.imp_uid,
                amount: Number(data?.fetchSeries.price),
                seriesList: [`${data?.fetchSeries.seriesId}`],
              },
            },
          })
          console.log(result) // {data} //  ***로그삭제
          alert('결제에 성공했습니다.')
          localStorage.removeItem('buySeriesId')
          router.push('/')
        } else {
          // 결제 취소 시 로직,
          alert('결제가 종료되었습니다. 다시 시도해 주세요.')
        }
      },
    )
  }

  return <PurchaseUI data={data} imageErrorVisible={imageErrorVisible} onClickPayment={onClickPayment} />
}
