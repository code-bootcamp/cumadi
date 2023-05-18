import { Modal } from 'antd'
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import CartUI from './Cart.presenter'
import { FETCH_SHOPPING_CART } from './Cart.queries'
import { IList } from './Cart.types'
import { IQuery } from '@/common/types/generated/types'

// checkList 가 빈배열 => 최종 결제할 데이터가 담긴 배열 => 최초 []  =>  length는 0
// productList 는 로컬스토리지에 저장된 데이터가 담긴 배열 => 삭제, 구매 등 목록에서 삭제될때 변경되는 배열

export default function Cart() {
  const [totalPrice, setTotalPrice] = useState(0) // 최종 결제 금액
  const [checkList, setCheckList] = useState<Array<any>>([]) // 체크리스트 배열

  const { data } = useQuery<Pick<IQuery, 'fetchShoppingCart'>>(FETCH_SHOPPING_CART)
  // const [productList, setProductList] = useState(data?.fetchShoppingCart) // 상품리스트 배열

  console.log(data)
  console.log(data?.fetchShoppingCart) // [{…}, {…}, {…}, {…}, {…}, {…}, {…}]

  useEffect(() => {
    let sumPrice = 0
    for (let i = 0; i < checkList.length; i++) {
      sumPrice += checkList[i].price
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

  const onClickCheckList = (list: IList) => {
    if (checkList.every(item => item.seriesId !== list.seriesId)) {
      setCheckList([...checkList, list])
    } else {
      const result = checkList.filter(item => item.seriesId !== list.seriesId) // 체크박스 해제시 즉, 같은 체크박스 계속 클릭 시
      setCheckList(result)
    }
  }

  // 현재 체크리스트에 해당 list id가 있다면 true, 없으면 false를 반환
  const isChecked = (list: IList) => {
    return checkList.some(item => item.seriesId === list.seriesId)
  }

  console.log(checkList)

  const onClickRemoveChecked = () => {
    Modal.confirm({
      content: '선택한 상품을 삭제하시겠습니까?',
      okText: '확인',
      cancelText: '취소',
      onOk() {
        const result = data?.fetchShoppingCart?.filter(cartList => {
          return !checkList.some(checkeditem => cartList.seriesId === checkeditem.seriesId)
        })
        // setProductList(result) // 체크하지 않은 상품리스트
        setCheckList([]) // 체크리스트 초기화
      },
    })
  }

  const onClickRemoveList = (seriesId: string) => {
    Modal.confirm({
      content: '삭제하시겠습니까?',
      okText: '확인',
      cancelText: '취소',
      onOk() {
        const result = data?.fetchShoppingCart?.filter(list => list.seriesId !== seriesId) // 클릭한 상품의 id가 아닌 상품을 다시 장바구니로 저장
        // setProductList(result)
        setCheckList([]) //  체크리스트 초기화 => 리렌더
      },
      onCancel() {
        return
      },
    })
  }

  const onClickPayment = () => {
    if (checkList.length === 0) {
      alert('시리즈를 선택해주세요.')
      return
    }
  }

  return (
    <CartUI
      data={data}
      ischecked={isChecked}
      // productList={productList}
      checkList={checkList}
      totalPrice={totalPrice}
      onClickCheckAll={onClickCheckAll}
      onClickCheckList={onClickCheckList}
      onClickRemoveChecked={onClickRemoveChecked}
      onClickRemoveList={onClickRemoveList}
      onClickPayment={onClickPayment}
    />
  )
}
