import { Modal } from 'antd'
import { useState, useEffect } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import CartUI from './Cart.presenter'
import {
  CREATE_PAYMENT_FREE_SERIES,
  CREATE_PAYMENT_SERIES,
  DELETE_SERIES_IN_CART,
  FETCH_SHOPPING_CART,
  FETCH_USER_LOGGED_IN,
} from './Cart.queries'
import { IList } from './Cart.types'
import {
  IMutation,
  IMutationCreatePaymentFreeSeriesArgs,
  IMutationCreatePaymentSeriesArgs,
  IMutationDeleteSeriesInCartArgs,
  IQuery,
  ISeries,
} from '@/common/types/generated/types'
import { useRouter } from 'next/router'

// checkList 가 빈배열 => 최종 결제할 데이터가 담긴 배열 => 최초 []  =>  length는 0
// productList 는 로컬스토리지에 저장된 데이터가 담긴 배열 => 삭제, 구매 등 목록에서 삭제될때 변경되는 배열

declare const window: typeof globalThis & {
  IMP: any
}

export default function Cart() {
  const router = useRouter()
  const [totalPrice, setTotalPrice] = useState(0) // 최종 결제 금액
  const [checkList, setCheckList] = useState<Array<ISeries>>([]) // 체크리스트 배열

  const { data: userData } = useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN)
  const { data } = useQuery<Pick<IQuery, 'fetchShoppingCart'>>(FETCH_SHOPPING_CART)
  // const [productList, setProductList] = useState(data?.fetchShoppingCart) // 상품리스트 배열
  const [deleteSeriesInCart] = useMutation<Pick<IMutation, 'deleteSeriesInCart'>, IMutationDeleteSeriesInCartArgs>(
    DELETE_SERIES_IN_CART,
  )
  const [createPaymentSeries] = useMutation<Pick<IMutation, 'createPaymentSeries'>, IMutationCreatePaymentSeriesArgs>(
    CREATE_PAYMENT_SERIES,
  )
  const [createPaymentFreeSeries] = useMutation<
    Pick<IMutation, 'createPaymentFreeSeries'>,
    IMutationCreatePaymentFreeSeriesArgs
  >(CREATE_PAYMENT_FREE_SERIES)
  // console.log('렌더링') //  ***로그삭제

  console.log(data) //  ***로그삭제
  // console.log(data?.fetchShoppingCart) // [{…}, {…}, {…}, {…}, {…}, {…}, {…}] //  ***로그삭제

  useEffect(() => {
    let sumPrice = 0
    for (let i = 0; i < checkList.length; i++) {
      sumPrice += Number(checkList[i].price)
    }
    setTotalPrice(sumPrice)
  }, [checkList])

  const onClickCheckAll = () => {
    if (!data?.fetchShoppingCart) return
    if (checkList.length !== data?.fetchShoppingCart.length) {
      setCheckList(data?.fetchShoppingCart)
    } else {
      setCheckList([])
    }
  }

  const onClickCheckList = (list: ISeries) => {
    if (checkList.every(item => item.seriesId !== list.seriesId)) {
      setCheckList([...checkList, list])
    } else {
      const result = checkList.filter(item => item.seriesId !== list.seriesId) // 체크박스 해제시 즉, 같은 체크박스 계속 클릭 시
      setCheckList(result)
    }
  }

  // 현재 체크리스트에 해당 seriesId가 있다면 true, 없으면 false를 반환
  const ischecked = (list: ISeries) => {
    return checkList.some(item => item.seriesId === list.seriesId)
  }

  console.log(checkList) //  ***로그삭제

  // const onClickRemoveChecked = () => {
  //   Modal.confirm({
  //     content: '선택한 상품을 삭제하시겠습니까?',
  //     okText: '확인',
  //     cancelText: '취소',
  //     onOk() {
  //       const result = data?.fetchShoppingCart?.filter(cartList => {
  //         return !checkList.some(checkeditem => cartList.seriesId === checkeditem.seriesId)
  //       })
  //       // setProductList(result) // 체크하지 않은 상품리스트
  //       setCheckList([]) // 체크리스트 초기화
  //     },
  //   })
  // }

  const onClickRemoveList = (seriesId: string) => {
    // console.log(seriesId) //  ***로그삭제

    Modal.confirm({
      content: '삭제하시겠습니까?',
      okText: '확인',
      cancelText: '취소',
      async onOk() {
        await deleteSeriesInCart({
          variables: { seriesId }, //  shorthand-property
          refetchQueries: [{ query: FETCH_SHOPPING_CART }],
        })
        const result = checkList.filter(list => list.seriesId !== seriesId)
        if (result) setCheckList(result) //  삭제해도 다른 리스트는 체크상태 유지
        console.log(result)
      },
      onCancel() {
        return
      },
    })
  }

  const onClickPayment = async () => {
    if (checkList.length === 0) {
      alert('시리즈를 선택해주세요.')
      return
    }

    const seriesIdList = checkList.map(series => series.seriesId)
    console.log(seriesIdList) //  ***로그삭제

    if (totalPrice === 0) {
      try {
        const result = await createPaymentFreeSeries({
          variables: { seriesList: seriesIdList },
          refetchQueries: [{ query: FETCH_SHOPPING_CART }],
        })
        console.log(result)
        alert('결제에 성공했습니다.')
        router.push('/')
      } catch (error) {
        if (error instanceof Error) alert(error.message)
      }
      return
    }

    const IMP = window.IMP
    IMP.init('imp71265174')

    // 결제창 호출
    IMP.request_pay(
      {
        pg: 'nice.nictest04m',
        pay_method: 'card',
        name: `시리즈 ${checkList.length}개 구매`,
        amount: Number(totalPrice),
        buyer_email: userData?.fetchUserLoggedIn.email,
        buyer_name: userData?.fetchUserLoggedIn.nickname,
        m_redirect_url: `http://localhost:3000/cart`, // 모바일에서는 결제시, 결제페이지로 사이트가 이동되므로 돌아올시 주소입력
      },
      async (rsp: any) => {
        if (rsp.success) {
          console.log(rsp) //  ***로그삭제

          const result = await createPaymentSeries({
            variables: {
              createPaymentInput: {
                impUid: rsp.imp_uid,
                amount: totalPrice,
                seriesList: seriesIdList,
              },
            },
            refetchQueries: [{ query: FETCH_SHOPPING_CART }],
          })
          console.log(result) // {data} //  ***로그삭제
          alert('결제에 성공했습니다.')
          router.push('/')
        } else {
          // 결제 취소 시 로직,
          alert('결제가 종료되었습니다. 다시 시도해 주세요.')
        }
      },
    )
  }

  return (
    <CartUI
      data={data}
      ischecked={ischecked}
      // productList={productList}
      checkList={checkList}
      totalPrice={totalPrice}
      onClickCheckAll={onClickCheckAll}
      onClickCheckList={onClickCheckList}
      // onClickRemoveChecked={onClickRemoveChecked}
      onClickRemoveList={onClickRemoveList}
      onClickPayment={onClickPayment}
    />
  )
}
