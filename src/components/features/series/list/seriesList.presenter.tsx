import { Avatar } from 'antd'

import * as S from './seriesList.styles'

import { FlexColumnContainer } from '@/components/common/customComponent.styles'
import { BodyText, BodyTextLg, BodyTextSm } from '@/common/styles/globalStyles'
import { TruncatedText } from '@/common/styles/UI/util.styles'
import { InfoSectionContainer } from '@/components/common/customComponent.styles'
import { ProfileContainer } from '@/components/common/customComponent.styles'
import { ProfileTextDataContainer } from '@/components/common/customComponent.styles'
import { ReactionContainer } from '@/components/common/customComponent.styles'
import { ReactionsContainer } from '@/components/common/customComponent.styles'
import { Colors } from '@/common/styles/colors'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import { seriesItem } from '@/common/dummyData/series'
import { Rate } from 'antd';

export default function SeriesListUI() {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.Body>
      {seriesItem.map(el => (
        <S.StyledCard cover={<img alt="example" src={el.thumbnail} onClick={onClickMoveToPage(`/series/${el.id}`)} />}>
          <FlexColumnContainer gap={'0.5rem'}>
            <BodyTextSm color={Colors.primary} weight={600}>
              {el.categories}
            </BodyTextSm>
            <BodyTextLg>{el.title}</BodyTextLg>
            <InfoSectionContainer>
              <ProfileContainer>
                <Avatar>A</Avatar>
                <ProfileTextDataContainer>
                  <BodyTextSm weight={600}>{el.name}</BodyTextSm>
                  <BodyTextSm color={Colors.gray1}>{el.createDate}</BodyTextSm>
                </ProfileTextDataContainer>
              </ProfileContainer>
              <ReactionsContainer>
                <ReactionContainer>
                  <Rate disabled value={el.star} />
                </ReactionContainer>
              </ReactionsContainer>
            </InfoSectionContainer>
          </FlexColumnContainer>
        </S.StyledCard>
      ))}
    </S.Body>
  )
}
