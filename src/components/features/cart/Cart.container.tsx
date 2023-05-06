import { useState, useEffect } from "react";
import { ICartProps, IList } from "./Cart.types";
import CartUI from "./Cart.presenter";

export default function Cart(props: ICartProps) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkList, setCheckList] = useState<Array<any>>([]);

  useEffect(() => {
    let sumPrice = 0;
    for (let i = 0; i < checkList.length; i++) {
      sumPrice += checkList[i].price;
    }
    setTotalPrice(sumPrice);
  }, [checkList]);

  const onClickCheckAll = () => {
    if (checkList.length !== props.postItem.length) {
      setCheckList(props.postItem);
    } else {
      setCheckList([]);
    }
  };

  const onClickCheckList = (list: IList) => {
    if (checkList.every((item) => item.id !== list.id)) {
      setCheckList([...checkList, list]);
    } else {
      const result = checkList.filter((item) => item.id !== list.id);
      setCheckList(result);
    }
  };

  return (
    <CartUI
      checkList={checkList}
      onClickCheckAll={onClickCheckAll}
      onClickCheckList={onClickCheckList}
      totalPrice={totalPrice}
    />
  );
}
