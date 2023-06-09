import Script from 'next/script'
import { Checkbox, Empty } from 'antd'
import {
  HorizontalCardSm,
  FlexColumnContainer,
  InfoSectionContainer,
  PriceContainer,
  EmptyStateContainer,
} from '@/components/common/customComponent.styles'
import { BodyTextLg, BodyTextSm } from '@/common/styles/globalStyles'
import { Colors } from '@/common/styles/colors'
import { MyButton } from '@/components/common/customComponent.styles'
import { ICartUIProps } from './Cart.types'
import * as S from './Cart.styles'

export default function CartUI(props: ICartUIProps) {
  return (
    <>
      <Script src="https://cdn.iamport.kr/v1/iamport.js" />
      <S.Body>
        {props.data?.fetchShoppingCart && props.data.fetchShoppingCart.length === 0 ? (
          <S.EmptyCart>장바구니에 담긴 상품이 없습니다</S.EmptyCart>
        ) : (
          <>
            <S.AllCheckWrapper>
              <div>
                <Checkbox
                  type="checkbox"
                  checked={props.checkList.length === props.data?.fetchShoppingCart.length}
                  onChange={props.onClickCheckAll}
                />
                <S.AllCheckTitle>전체 선택하기</S.AllCheckTitle>
              </div>
            </S.AllCheckWrapper>
            <S.CheckListWrapper>
              {props.data?.fetchShoppingCart.map(list => (
                <S.CardWrapper key={list.seriesId} className="card-wrapper">
                  <Checkbox
                    type="checkbox"
                    onChange={() => {
                      props.onClickCheckList(list)
                    }}
                    checked={props.ischecked(list)}
                  />
                  <HorizontalCardSm>
                    {list.image ? (
                      <img className="horizontal-card-cover" src={list.image} alt={`${list.title} 이미지`} />
                    ) : (
                      <EmptyStateContainer>
                        <Empty description={<span>이미지가 없습니다.</span>} />
                      </EmptyStateContainer>
                    )}
                    <div className="horizontal-card-body" style={{ display: 'flex', alignItems: 'center' }}>
                      <FlexColumnContainer gap={'0.5rem'}>
                        <BodyTextLg>
                          <S.TitleWrapper>
                            <S.BookImage src="/images/book.svg" />
                            {list.title}
                          </S.TitleWrapper>
                        </BodyTextLg>
                        <InfoSectionContainer>
                          <BodyTextSm color={Colors.gray1}>{list.user.nickname}</BodyTextSm>
                        </InfoSectionContainer>
                      </FlexColumnContainer>
                      <PriceContainer>
                        <BodyTextLg>{list.price ? `${list.price.toLocaleString()}원` : '무료'}</BodyTextLg>
                      </PriceContainer>
                    </div>
                  </HorizontalCardSm>
                  <MyButton
                    onClick={() => {
                      props.onClickRemoveList(list.seriesId)
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
