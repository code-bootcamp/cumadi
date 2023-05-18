import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import { Colors } from '@/common/styles/colors'
import { BodyTextLg, BodyTextSm } from '@/common/styles/globalStyles'
import {
  FlexColumnContainer,
  HorizontalCardSm,
  InfoSectionContainer,
  MyButton,
  PriceContainer,
} from '@/components/common/customComponent.styles'
import * as S from './myPaymentHistory.styles'
import { IMyPaymentHistoryUIProps } from './myPaymentHistory.types'

export default function MyPaymentHistoryUI(props: IMyPaymentHistoryUIProps) {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.Body>
      <S.CheckListWrapper>
        {props.data?.fetchPaymentDetailByUser.map(el => (
          <S.CardWrapper key={el.paymentDetailId} className="card-wrapper">
            <HorizontalCardSm>
              <img className="horizontal-card-cover" alt={`${el.series.image} 이미지`} src={el.series.image} />
              <div className="horizontal-card-body" style={{ display: 'flex', alignItems: 'center' }}>
                <FlexColumnContainer gap={'0.5rem'}>
                  <BodyTextLg>{el.series.title}</BodyTextLg>
                  <InfoSectionContainer>
                    <BodyTextSm color={Colors.gray1}>{el.series.createdAt}</BodyTextSm>
                  </InfoSectionContainer>
                </FlexColumnContainer>
                <PriceContainer>
                  <BodyTextLg>{`${el.series.price?.toLocaleString()}원`}</BodyTextLg>
                </PriceContainer>
              </div>
            </HorizontalCardSm>
            <MyButton>리뷰작성</MyButton>
          </S.CardWrapper>
        ))}
      </S.CheckListWrapper>
    </S.Body>
  )
}
