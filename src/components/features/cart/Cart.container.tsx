import { useState, useEffect } from 'react'
import { IList } from './Cart.types'
import CartUI from './Cart.presenter'
import { postItem } from '@/common/dummyData/post'
import { Modal } from 'antd'

// postItem 이 로컬스토리지에 저장된 데이터가 담긴 배열 => 최초
// checkList 가 빈배열 => 최종 결제할 데이터가 담긴 배열 => 최종 로컬스토리지에서 다시 저장될 배열?
// productList 는 로컬스토리지에 저장된 데이터가 담긴 배열 => 삭제, 구매 등 목록에서 삭제될때 변경되는 배열

export default function Cart() {
  const [totalPrice, setTotalPrice] = useState(0) // 최종 결제 금액
  const [checkList, setCheckList] = useState<Array<any>>([]) // 체크리스트 배열
  const [productList, setProductList] = useState(postItem) // 상품리스트 배열

  useEffect(() => {
    let sumPrice = 0
    for (let i = 0; i < checkList.length; i++) {
      sumPrice += checkList[i].price
    }
    setTotalPrice(sumPrice)
  }, [checkList])

  const onClickCheckAll = () => {
    if (checkList.length !== productList.length) {
      setCheckList(productList)
    } else {
      setCheckList([])
    }
  }

  const onClickCheckList = (list: IList) => {
    // console.log(list);
    // console.log(checkList); // 최초 []

    if (checkList.every(item => item.id !== list.id)) {
      // console.log(checkList); // 렌더링 후에 들어가기 때문에 클릭해제시 배열이 담겨있는 상태로 로그가 찍힘
      setCheckList([...checkList, list])
    } else {
      const result = checkList.filter(item => item.id !== list.id) // 체크박스 해제시 즉, 같은 체크박스 계속 클릭 시
      // console.log(checkList);
      setCheckList(result)
    }
  }

  console.log(checkList) // ***** 체크리스트 배열이 정확하게 담김을 확인 완료!! (개별선택시에도, 올체크선택시에도)
  console.log(totalPrice)

  const onClickRemoveChecked = () => {
    Modal.confirm({
      content: '선택한 상품을 삭제하시겠습니까?',
      okText: '확인',
      cancelText: '취소',
      onOk() {
        const result = productList.filter(cartList => {
          return !checkList.some(checkeditem => cartList.id === checkeditem.id)
        })
        setProductList(result) // 체크하지 않은 상품리스트
        setCheckList([]) // 체크리스트 초기화
        // console.log(result)
      },
    })
  }

  const onClickRemoveList = (id: string) => {
    // console.log(id); // 아이디 로그 잘 찍힘
    // console.log(checkList.length); //  []  =>  length는 0
    Modal.confirm({
      content: '삭제하시겠습니까?',
      okText: '확인',
      cancelText: '취소',
      onOk() {
        const result = productList.filter(list => list.id !== id) // 클릭한 상품의 id가 아닌 상품을 다시 장바구니로 저장
        setProductList(result)
        setCheckList([]) //  체크리스트 초기화 => 리렌더
      },
      onCancel() {
        return
      },
    })
  }
  console.log(productList)

  const onClickPayment = () => {
    if (checkList.length === 0) {
      alert('시리즈를 선택해주세요.')
      return
    }
  }

  return (
    <CartUI
      postItem={postItem}
      productList={productList}
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
