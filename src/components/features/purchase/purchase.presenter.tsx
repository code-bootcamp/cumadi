import { IPurchaseUIProps } from "./purchase.types";
import * as S from "./purchase.styles";
import { Checkbox } from "antd";
import {
  HorizontalCardSm,
  FlexColumnContainer,
  InfoSectionContainer,
  PriceContainer,
} from "@/components/common/customComponent.styles";
import { BodyTextLg, BodyTextSm } from "@/common/styles/globalStyles";
import { Colors } from "@/common/styles/colors";
import { MyButton } from "@/components/common/customComponent.styles";
import Script from "next/script";

export default function PurchaseUI(props: IPurchaseUIProps) {
  return (
    <>
      <Script src="https://cdn.iamport.kr/v1/iamport.js" />
      <S.Body>
        <S.AllCheckWrapper>
          <Checkbox type="checkbox" checked />
          <S.AllCheckTitle>전체 선택하기</S.AllCheckTitle>
        </S.AllCheckWrapper>
        <S.CheckListWrapper>
          <S.CardWrapper className="card-wrapper">
            <Checkbox type="checkbox" checked />
            <HorizontalCardSm>
              <img
                className="horizontal-card-cover"
                src={props.checkList[0].image}
                alt={`${props.checkList[0].title} 이미지`}
              />
              <div
                className="horizontal-card-body"
                style={{ display: "flex", alignItems: "center" }}
              >
                <FlexColumnContainer gap={"0.5rem"}>
                  <BodyTextLg>
                    <S.BookImage src="/images/book.svg" />
                    {props.checkList[0].title}
                  </BodyTextLg>
                  <InfoSectionContainer>
                    <BodyTextSm color={Colors.gray1}>
                      {props.checkList[0].name}
                    </BodyTextSm>
                  </InfoSectionContainer>
                </FlexColumnContainer>
                <PriceContainer>
                  <BodyTextLg>{`${props.checkList[0].price.toLocaleString()}원`}</BodyTextLg>
                </PriceContainer>
              </div>
            </HorizontalCardSm>
          </S.CardWrapper>
        </S.CheckListWrapper>
        <S.TotalPriceWrapper>
          <S.TotalPrice>{`총 ${props.checkList[0].price.toLocaleString()}원`}</S.TotalPrice>
          <MyButton type="primary" onClick={props.onClickPayment}>
            선택한 시리즈 결제하기
          </MyButton>
        </S.TotalPriceWrapper>
      </S.Body>
    </>
  );
}
