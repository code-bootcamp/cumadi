import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useMutation, useQuery } from '@apollo/client'

import CartUI from './Cart.presenter'
import {
  // CHECK_PAYMENT_LIST,
  CREATE_PAYMENT_FREE_SERIES,
  CREATE_PAYMENT_SERIES,
  DELETE_SERIES_IN_CART,
  FETCH_SHOPPING_CART,
  FETCH_USER_LOGGED_IN,
} from './Cart.queries'
import {
  IMutation,
  IMutationCreatePaymentFreeSeriesArgs,
  IMutationCreatePaymentSeriesArgs,
  IMutationDeleteSeriesInCartArgs,
  IQuery,
  // IQueryCheckPaymentListArgs,
  ISeries,
} from '@/common/types/generated/types'

declare const window: typeof globalThis & {
  IMP: any
}

export default function Cart() {
  const router = useRouter()

  const [totalPrice, setTotalPrice] = useState(0) // 최종 결제 금액
  const [checkList, setCheckList] = useState<Array<ISeries>>([]) // 최종 결제할 체크리스트 배열

  useEffect(() => {
    let sumPrice = 0
    for (let i = 0; i < checkList.length; i++) {
      sumPrice += Number(checkList[i].price)
    }
    setTotalPrice(sumPrice)
  }, [checkList])

  // const { data: isPaidData } = useQuery<Pick<IQuery, 'checkPaymentList'>, IQueryCheckPaymentListArgs>(
  //   CHECK_PAYMENT_LIST,
  //   { variables: { seriesId: [] } },
  // )
  const { data: userData } = useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN)
  const { data } = useQuery<Pick<IQuery, 'fetchShoppingCart'>>(FETCH_SHOPPING_CART)

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

  const ischecked = (list: ISeries) => {
    return checkList.some(item => item.seriesId === list.seriesId) // 현재 체크리스트에 해당 seriesId가 있다면 true, 없으면 false를 반환
  }

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

  const onClickRemoveList = (seriesId: string) => {
    Modal.confirm({
      content: '삭제하시겠습니까?',
      okText: '확인',
      cancelText: '취소',
      async onOk() {
        await deleteSeriesInCart({
          variables: { seriesId },
          // refetchQueries: [{ query: FETCH_SHOPPING_CART }],
          update(cache) {
            cache.modify({
              fields: {
                fetchShoppingCart: (prev, { readField }) => {
                  const deletedId = seriesId
                  const filteredPrev = prev.filter((el: any) => readField('seriesId', el) !== deletedId)
                  return [...filteredPrev]
                },
              },
            })
          },
        })
        const result = checkList.filter(list => list.seriesId !== seriesId)
        if (result) setCheckList(result) //  삭제해도 다른 리스트는 체크상태 유지
      },
      onCancel() {
        return
      },
    })
  }

  const onClickPayment = async () => {
    if (checkList.length === 0) {
      Modal.warning({ content: '시리즈를 선택해주세요.' })
      return
    }

    const seriesIdList = checkList.map(series => series.seriesId) //  시리즈ID만 따로 배열 생성

    //  false 이면 기존 구매 내역 존재하므로 결제 미진행
    // if (!isPaidData?.checkPaymentList.status) {
    //   alert('이미 구매하신 상품이 포함되어 있습니다. 구매를 원하시는 새로운 상품만 결제가 가능합니다.')
    //   return
    // }

    //  결제 할 금액이 총 0원일 때,
    if (totalPrice === 0) {
      try {
        await createPaymentFreeSeries({
          variables: { seriesList: seriesIdList },
          refetchQueries: [{ query: FETCH_SHOPPING_CART }],
        })
        Modal.success({ content: '결제에 성공했습니다.' })
        router.push('/')
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message })
      }
      return
    }

    //  결제 할 금액이 총 0원이 아닐 때,
    const IMP = window.IMP
    IMP.init('imp71265174')

    IMP.request_pay(
      {
        pg: 'nice.nictest04m',
        pay_method: 'card',
        name: `시리즈 ${seriesIdList.length}개 구매`,
        amount: Number(totalPrice),
        buyer_email: userData?.fetchUserLoggedIn.email,
        buyer_name: userData?.fetchUserLoggedIn.nickname,
        m_redirect_url: `http://localhost:3000/cart`, // 모바일에서는 결제시, 결제페이지로 사이트가 이동되므로 돌아올시 주소
      },
      async (rsp: any) => {
        if (rsp.success) {
          await createPaymentSeries({
            variables: {
              createPaymentInput: {
                impUid: rsp.imp_uid,
                amount: totalPrice,
                seriesList: seriesIdList,
              },
            },
            refetchQueries: [{ query: FETCH_SHOPPING_CART }],
          })
          Modal.success({ content: '결제에 성공했습니다.' })
          router.push('/')
        } else {
          // 결제 취소 시,
          Modal.info({ content: '결제가 종료되었습니다. 다시 시도해 주세요.' })
        }
      },
    )
  }

  return (
    <CartUI
      data={data}
      ischecked={ischecked}
      checkList={checkList}
      totalPrice={totalPrice}
      onClickCheckAll={onClickCheckAll}
      onClickCheckList={onClickCheckList}
      onClickRemoveList={onClickRemoveList}
      onClickPayment={onClickPayment}
    />
  )
}
