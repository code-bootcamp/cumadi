import { ChangeEvent, useState } from 'react'
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
import { CREATE_PAYMENT_SERIES, FETCH_SERIES } from './purchase.queries'

// 시리즈 상세페이지에서 바로구매를 클릭했을 때 불러온 해당 시리즈 데이터 => 페이지단에서 fetch 여부 확인
// const seriesItem = [
//   {
//     seriesId: '622d9455-16f8-4ea5-91e5-c30bc488a591',
//     user: {
//       userId: 'c5a3577d-31bf-4547-a646-420a11cbdc23',
//       nickname: '죠르디',
//     },
//     title: '디자인 패턴(4) - payment test',
//     introduction: '디자인을 알면 개발이 쉬워진다',
//     image: 'spring.jpg',
//     price: 100,
//     createDate: '2023-05-17T07:12:48.126Z',
//   },
// ]

declare const window: typeof globalThis & {
  IMP: any
}

export default function Purchase() {
  const router = useRouter()
  console.log(router) //  ***로그삭제

  const { data } = useQuery<Pick<IQuery, 'fetchSeries'>, IQueryFetchSeriesArgs>(FETCH_SERIES, {
    variables: { seriesId: 'a410b539-376e-451f-ae81-35d97b5208a6' },
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
    //  //  ***로그삭제 purchaseProduct(checkList, checkList[0].price, router, createPaymentSeries, checkList[0].seriesId)

    const IMP = window.IMP
    IMP.init('imp71265174') // 나의 식별코드 imp06164883 imp71265174 imp49910675

    // 결제창 호출
    IMP.request_pay(
      {
        pg: 'nice.nictest04m',
        pay_method: 'card',
        name: `시리즈 ${data?.fetchSeries.title} 구매`,
        amount: Number(data?.fetchSeries.price),
        buyer_email: data?.fetchSeries.user.email,
        buyer_name: data?.fetchSeries.user.nickname,
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
          router.push('/my/paymentHistory')
        } else {
          // 결제 취소 시 로직,
          alert('결제가 종료되었습니다. 다시 시도해 주세요.')
        }
      },
    )
  }

  return <PurchaseUI data={data} imageErrorVisible={imageErrorVisible} onClickPayment={onClickPayment} />
}
