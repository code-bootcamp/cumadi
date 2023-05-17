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
import { postItem } from '@/common/dummyData/post'

export default function MyPaymentHistoryUI() {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.Body>
      <S.CheckListWrapper>
        {postItem.map(el => (
          <S.CardWrapper key={el.id} className="card-wrapper">
            <HorizontalCardSm>
              <img className="horizontal-card-cover" alt={`${el.title} 이미지`} src={el.image} />
              <div className="horizontal-card-body" style={{ display: 'flex', alignItems: 'center' }}>
                <FlexColumnContainer gap={'0.5rem'}>
                  <BodyTextLg>{el.title}</BodyTextLg>
                  <InfoSectionContainer>
                    <BodyTextSm color={Colors.gray1}>구매날짜</BodyTextSm>
                  </InfoSectionContainer>
                </FlexColumnContainer>
                <PriceContainer>
                  <BodyTextLg>{`${el.price.toLocaleString()}원`}</BodyTextLg>
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
