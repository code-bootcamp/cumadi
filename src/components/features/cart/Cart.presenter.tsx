import { ICartUIProps } from './Cart.types'
import * as S from './Cart.styles'
import { Checkbox } from 'antd'
import {
  HorizontalCardSm,
  FlexColumnContainer,
  InfoSectionContainer,
  PriceContainer,
<<<<<<< HEAD
} from "@/components/common/customComponent.styles";
import { BodyTextLg, BodyTextSm } from "@/common/styles/globalStyles";
import { Colors } from "@/common/styles/colors";
import { MyButton } from "@/components/common/customComponent.styles";
import Script from "next/script";
=======
} from '@/components/common/customComponent.styles'
import { BodyTextLg, BodyTextSm } from '@/common/styles/globalStyles'
import { Colors } from '@/common/styles/colors'
import { MyButton } from '@/components/common/customComponent.styles'
>>>>>>> main

export default function CartUI(props: ICartUIProps) {
  return (
    <>
      <Script src="https://cdn.iamport.kr/v1/iamport.js" />
      <S.Body>
        {props.productList && props.productList.length === 0 ? (
          <S.EmptyCart>장바구니에 담긴 상품이 없습니다</S.EmptyCart>
        ) : (
          <>
            <S.AllCheckWrapper>
              <div>
                <Checkbox
                  type="checkbox"
                  checked={props.checkList.length === props.productList.length}
                  onChange={props.onClickCheckAll}
                />
                <S.AllCheckTitle>전체 선택하기</S.AllCheckTitle>
              </div>
              <MyButton onClick={props.onClickRemoveChecked} disabled={props.checkList.length === 0}>
                선택 삭제하기
              </MyButton>
            </S.AllCheckWrapper>
            <S.CheckListWrapper>
              {props.productList.map(list => (
                <S.CardWrapper key={list.id} className="card-wrapper">
                  <Checkbox
                    type="checkbox"
                    onChange={() => {
                      props.onClickCheckList(list)
                    }}
                    checked={props.isChecked(list)}
                  />
                  <HorizontalCardSm>
                    <img className="horizontal-card-cover" src={list.image} alt={`${list.title} 이미지`} />
                    <div className="horizontal-card-body" style={{ display: 'flex', alignItems: 'center' }}>
                      <FlexColumnContainer gap={'0.5rem'}>
                        <BodyTextLg>
                          <S.BookImage src="/images/book.svg" />
                          {list.title}
                        </BodyTextLg>
                        <InfoSectionContainer>
                          <BodyTextSm color={Colors.gray1}>{list.name}</BodyTextSm>
                        </InfoSectionContainer>
                      </FlexColumnContainer>
                      <PriceContainer>
                        <BodyTextLg>{`${list.price.toLocaleString()}원`}</BodyTextLg>
                      </PriceContainer>
                    </div>
                  </HorizontalCardSm>
                  <MyButton
                    onClick={() => {
                      props.onClickRemoveList(list.id)
                    }}>
                    삭제
                  </MyButton>
                </S.CardWrapper>
              ))}
            </S.CheckListWrapper>
            <S.TotalPriceWrapper>
              <S.TotalPrice>{`총 ${props.totalPrice.toLocaleString()}원`}</S.TotalPrice>
              <MyButton type="primary" onClick={props.onClickPayment}>
                선택한 시리즈 결제하기
              </MyButton>
            </S.TotalPriceWrapper>
          </>
        )}
      </S.Body>
    </>
  )
}
