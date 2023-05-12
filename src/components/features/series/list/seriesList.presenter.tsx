import { Avatar } from 'antd'
import * as S from './seriesList.styles'
import { FlexColumnContainer } from '@/components/common/customComponent.styles'
import { BodyTextLg, BodyTextSm } from '@/common/styles/globalStyles'
import { InfoSectionContainer } from '@/components/common/customComponent.styles'
import { ProfileContainer } from '@/components/common/customComponent.styles'
import { ProfileTextDataContainer } from '@/components/common/customComponent.styles'
import { ReactionContainer } from '@/components/common/customComponent.styles'
import { ReactionsContainer } from '@/components/common/customComponent.styles'
import { Colors } from '@/common/styles/colors'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import { seriesItem } from '@/common/dummyData/series'
import { Rate } from 'antd';
import ViewTypesMenu from '../../viewtypes/viewTypes'

export default function SeriesListUI() {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.Body>
      <ViewTypesMenu post={false} />
      {seriesItem.map(el => (
        <S.StyledCard cover={<img alt="example" src={el.thumbnail} onClick={onClickMoveToPage(`/series/${el.id}`)} />}>
          <FlexColumnContainer gap={'0.5rem'}>
            <BodyTextSm color={Colors.primary} weight={600}>
              {el.categories}
            </BodyTextSm>
            <InfoSectionContainer>
              <BodyTextLg>{el.title}</BodyTextLg>
              <S.Price>무료</S.Price>
            </InfoSectionContainer>
            
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
