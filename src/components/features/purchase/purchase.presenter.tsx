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
import { IPurchaseUIProps } from './purchase.types'
import * as S from './purchase.styles'

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
              {props.data?.fetchSeries.image ? (
                <img
                  className="horizontal-card-cover"
                  src={props.data?.fetchSeries.image}
                  alt={`${props.data?.fetchSeries.title} 이미지`}
                />
              ) : (
                <EmptyStateContainer>
                  <Empty description={<span>이미지가 없습니다.</span>} />
                </EmptyStateContainer>
              )}

              <div className="horizontal-card-body" style={{ display: 'flex', alignItems: 'center' }}>
                <FlexColumnContainer gap={'0.5rem'}>
                  <BodyTextLg>
                    <S.BookImage src="/images/book.svg" />
                    {props.data?.fetchSeries.title}
                  </BodyTextLg>
                  <InfoSectionContainer>
                    <BodyTextSm color={Colors.gray1}>{props.data?.fetchSeries.user.nickname}</BodyTextSm>
                  </InfoSectionContainer>
                </FlexColumnContainer>
                <PriceContainer>
                  <BodyTextLg>
                    {props.data?.fetchSeries.price ? `${props.data?.fetchSeries.price.toLocaleString()}원` : '무료'}
                  </BodyTextLg>
                </PriceContainer>
              </div>
            </HorizontalCardSm>
          </S.CardWrapper>
        </S.CheckListWrapper>
        <S.TotalPriceWrapper>
          <S.TotalPrice>{`총 ${props.data?.fetchSeries.price?.toLocaleString()}원`}</S.TotalPrice>
          <MyButton type="primary" onClick={props.onClickPayment}>
            선택한 시리즈 결제하기
          </MyButton>
        </S.TotalPriceWrapper>
      </S.Body>
    </>
  )
}
