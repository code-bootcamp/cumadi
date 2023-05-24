import dayjs from 'dayjs'
import { Empty } from 'antd'

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
  return (
    <S.Body>
      <S.CheckListWrapper>
        {props.data?.fetchPaymentDetailByUser.map(el => (
          <S.CardWrapper key={el.paymentDetailId} className="card-wrapper">
            <S.SeriesCard onClick={props.onClickMoveToPage(`/series/${el.series.seriesId}`)}>
              <HorizontalCardSm>
                {el.series.image ? (
                  <img className="horizontal-card-cover" alt={`${el.series.image} 이미지`} src={el.series.image} />
                ) : (
                  <Empty description={<span>이미지가 없습니다.</span>} />
                )}
                <div className="horizontal-card-body" style={{ display: 'flex', alignItems: 'center' }}>
                  <FlexColumnContainer gap={'0.5rem'}>
                    <BodyTextLg>{el.series.title}</BodyTextLg>
                    <InfoSectionContainer>
                      <BodyTextSm color={Colors.gray1}>{dayjs(el.createdAt).format('YYYY.MM.DD')} 구매</BodyTextSm>
                    </InfoSectionContainer>
                  </FlexColumnContainer>
                  <PriceContainer>
                    <BodyTextLg>{el.series.price ? `${el.series.price.toLocaleString()}원` : '무료'}</BodyTextLg>
                  </PriceContainer>
                </div>
              </HorizontalCardSm>
            </S.SeriesCard>
            <MyButton onClick={props.onClickMoveToPage(`/series/${el.series.seriesId}`)}>리뷰작성</MyButton>
          </S.CardWrapper>
        ))}
      </S.CheckListWrapper>
    </S.Body>
  )
}
