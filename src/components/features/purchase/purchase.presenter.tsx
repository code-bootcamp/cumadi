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

export default function PurchaseUI(props: IPurchaseUIProps) {
  return (
    <>
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
                src={props.checkList.image}
                alt={`${props.checkList.title} 이미지`}
              />
              <div
                className="horizontal-card-body"
                style={{ display: "flex", alignItems: "center" }}
              >
                <FlexColumnContainer gap={"0.5rem"}>
                  <BodyTextLg>
                    <S.BookImage src="/images/book.svg" />
                    {props.checkList.title}
                  </BodyTextLg>
                  <InfoSectionContainer>
                    <BodyTextSm color={Colors.gray1}>
                      {props.checkList.name}
                    </BodyTextSm>
                  </InfoSectionContainer>
                </FlexColumnContainer>
                <PriceContainer>
                  <BodyTextLg>{`${props.checkList.price.toLocaleString()}원`}</BodyTextLg>
                </PriceContainer>
              </div>
            </HorizontalCardSm>
          </S.CardWrapper>
        </S.CheckListWrapper>
        <S.TotalPriceWrapper>
          <S.TotalPrice>{`총 ${props.checkList.price.toLocaleString()}원`}</S.TotalPrice>
          <MyButton type="primary" onClick={props.onClickPayment}>
            선택한 시리즈 결제하기
          </MyButton>
        </S.TotalPriceWrapper>
      </S.Body>
    </>
  );
}
