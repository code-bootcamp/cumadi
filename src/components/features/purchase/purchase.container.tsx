import { useState } from "react";
import PurchaseUI from "./purchase.presenter";
import { useRouter } from "next/router";
import { purchaseProduct } from "@/common/libraries/payment";

// 시리즈 상세페이지에서 바로구매를 클릭했을 때 불러온 해당 시리즈 데이터 => 페이지단에서 fetch 여부 확인
const seriesItem = [
  {
    id: "B9vUv0E0ibc0X55kVVLr",
    name: "홀란드",
    title: "포근한 니트로 만드는 나만의 글씨, 봉봉메이드 니트레터링 클래스",
    contents:
      "홀란드는 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus nulla blanditiis, ducimus sed suscipit atque neque consequatur cum eveniet nostrum quisquam alias distinctio et beatae tempore temporibus ab non iste.",
    image:
      "https://cdn.class101.net/images/3a25ecd9-d1ab-4d21-8cc1-522ea711e729",
    price: 100,
    createDate: "2023.04.01",
  },
];

export default function Purchase() {
  const router = useRouter();
  const [checkList] = useState(seriesItem); // 체크리스트 array일 때
  // const [checkList] = useState<Array<any>>([seriesItem]); // 체크리스트 object일 때 => object로 받은 데이터를 array로 변경

  console.log(checkList);

  const onClickPayment = () => {
    purchaseProduct(checkList, checkList[0].price, router);
  };

  return <PurchaseUI checkList={checkList} onClickPayment={onClickPayment} />;
}
