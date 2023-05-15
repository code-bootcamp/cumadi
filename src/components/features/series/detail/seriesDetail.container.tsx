import React from 'react'
import SeriesDetailUI from './seriesDetail.presenter'

export default function SeriesDetail() {
  // const { data } 장바구니 데이터 가져오기

  const handleItemToCart = (item) => () =>{
    const carts = JSON.parse(localStorage.getItem("carts") || "[]");

    const cartCheck = carts.filter((el) => el._id === carts._id);
    if (cartCheck.length === 1) {
      alert("이미 담으신 제품입니다.");
      return;
    }

    carts.push(item);
    localStorage.setItem("carts", JSON.stringify(carts));

  }

  return (
    <SeriesDetailUI handleItemToCart={handleItemToCart} />
  )
}
