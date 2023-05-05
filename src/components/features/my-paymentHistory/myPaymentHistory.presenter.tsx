import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import { Colors } from '@/common/styles/colors'
import { BodyTextLg, BodyTextSm } from '@/common/styles/globalStyles'
import {
  FlexColumnContainer,
  HorizontalCardSm,
  InfoSectionContainer,
  PriceContainer,
} from '@/components/common/customComponent.styles'
import * as S from './myPaymentHistory.styles'
import { postItem } from '@/common/dummyData/post'

export default function MyPaymentHistoryUI() {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.Body>
      {postItem.map(el => (
        <HorizontalCardSm>
          <img className="horizontal-card-cover" alt="example" src={el.image} />
          <div className="horizontal-card-body" style={{ display: 'flex', alignItems: 'center' }}>
            <FlexColumnContainer gap={'0.5rem'}>
              <BodyTextLg>{el.title}</BodyTextLg>
              <InfoSectionContainer>
                <BodyTextSm color={Colors.gray1}>주문날짜</BodyTextSm>
              </InfoSectionContainer>
            </FlexColumnContainer>
            <PriceContainer>
              <BodyTextLg>3,000원</BodyTextLg>
            </PriceContainer>
            <BodyTextLg>환불 신청</BodyTextLg>
            <BodyTextLg>리뷰 작성</BodyTextLg>
          </div>
        </HorizontalCardSm>
      ))}
    </S.Body>
  )
}
