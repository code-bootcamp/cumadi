<<<<<<< HEAD
import { useState, useEffect } from "react";
import { IList } from "./Cart.types";
import CartUI from "./Cart.presenter";
import { postItem } from "@/common/dummyData/post";
import { useRouter } from "next/router";
import { purchaseProduct } from "@/common/libraries/payment";
=======
import { Modal } from 'antd'
import { useState, useEffect } from 'react'
import { IList } from './Cart.types'
import CartUI from './Cart.presenter'
>>>>>>> main

// checkList 가 빈배열 => 최종 결제할 데이터가 담긴 배열 => 최초 []  =>  length는 0
// productList 는 로컬스토리지에 저장된 데이터가 담긴 배열 => 삭제, 구매 등 목록에서 삭제될때 변경되는 배열

export default function Cart() {
<<<<<<< HEAD
  const router = useRouter();
  const [totalPrice, setTotalPrice] = useState(0); // 최종 결제 금액
  const [checkList, setCheckList] = useState<Array<any>>([]); // 체크리스트 배열
  const [productList, setProductList] = useState(postItem); // 상품리스트 배열

  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(postItem)); //  localStorage에 장바구니 상품들을 저장(임시)
    let sumPrice = 0;
=======
  const [totalPrice, setTotalPrice] = useState(0) // 최종 결제 금액
  const [checkList, setCheckList] = useState<Array<any>>([]) // 체크리스트 배열
  const [productList, setProductList] = useState<Array<any>>([]) // 상품리스트 배열

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem('carts') || '[]')
    setProductList(result)

    let sumPrice = 0
>>>>>>> main
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
    if (checkList.every(item => item.id !== list.id)) {
      setCheckList([...checkList, list])
    } else {
      const result = checkList.filter(item => item.id !== list.id) // 체크박스 해제시 즉, 같은 체크박스 계속 클릭 시
      setCheckList(result)
    }
  }

  // 현재 체크리스트에 해당 list id가 있다면 true, 없으면 false를 반환
  const isChecked = (list: IList) => {
    return checkList.some(item => item.id === list.id)
  }

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
        localStorage.setItem('carts', JSON.stringify(result)) // 새로고침시에도 삭제된 상품 제외하고 보여짐
      },
    })
  }

  const onClickRemoveList = (id: string) => {
    Modal.confirm({
      content: '삭제하시겠습니까?',
      okText: '확인',
      cancelText: '취소',
      onOk() {
        const result = productList.filter(list => list.id !== id) // 클릭한 상품의 id가 아닌 상품을 다시 장바구니로 저장
        setProductList(result)
        setCheckList([]) //  체크리스트 초기화 => 리렌더
        localStorage.setItem('carts', JSON.stringify(result)) // 새로고침시에도 삭제된 상품 제외하고 보여짐
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
<<<<<<< HEAD
    purchaseProduct(checkList, totalPrice, router);
  };
=======
  }
>>>>>>> main

  return (
    <CartUI
      isChecked={isChecked}
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
