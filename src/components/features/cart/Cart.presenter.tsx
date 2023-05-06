import { postItem } from "@/common/dummyData/post";
import { ICartUIProps } from "./Cart.types";
import * as S from "./Cart.styles";
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

export default function CartUI(props: ICartUIProps) {
  return (
    <S.Body>
      <S.AllCheckWrapper>
        <Checkbox
          type="checkbox"
          checked={props.checkList.length === postItem.length}
          onChange={props.onClickCheckAll}
        />
        <S.AllCheckTitle>전체 선택하기</S.AllCheckTitle>
      </S.AllCheckWrapper>
      <div>
        {postItem.map((list) => (
          <S.CardWrapper key={list.id} className="card-wrapper">
            <Checkbox
              type="checkbox"
              onChange={() => {
                props.onClickCheckList(list);
              }}
              checked={props.checkList.includes(list)}
            />
            <HorizontalCardSm>
              <img
                className="horizontal-card-cover"
                src={list.image}
                alt={`${list.title} 이미지`}
              />
              <div
                className="horizontal-card-body"
                style={{ display: "flex", alignItems: "center" }}
              >
                <FlexColumnContainer gap={"0.5rem"}>
                  <BodyTextLg>{list.title}</BodyTextLg>
                  <InfoSectionContainer>
                    <BodyTextSm color={Colors.gray1}>{list.name}</BodyTextSm>
                  </InfoSectionContainer>
                </FlexColumnContainer>
                <PriceContainer>
                  <BodyTextLg>{list.price}</BodyTextLg>
                </PriceContainer>
              </div>
            </HorizontalCardSm>
            <MyButton>삭제</MyButton>
          </S.CardWrapper>
        ))}
      </div>
      <S.TotalPriceWrapper>
        <S.TotalPrice>{props.totalPrice}</S.TotalPrice>
        <MyButton type="primary">선택한 시리즈 결제하기</MyButton>
      </S.TotalPriceWrapper>
    </S.Body>
  );
}
