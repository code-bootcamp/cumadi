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
import { Rate } from 'antd';

export default function SeriesListUI(props: any) {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.Body>
      {props.data?.fetchSeriesAll.map(el => (
        <S.StyledCard cover={
          <S.CardThumbnailImg alt="example" src={'/images/no-image.jpeg'} onClick={onClickMoveToPage(`/series/${el.seriesId}`)} />}>
          <FlexColumnContainer gap={'0.5rem'}>
            <BodyTextSm color={Colors.primary} weight={600}>
              {el.category.name}
            </BodyTextSm>
            <InfoSectionContainer>
              <BodyTextLg>{el.title}</BodyTextLg>
              {el.price === 0 ? <S.Price>무료</S.Price> : <S.Price>{el.price}원</S.Price>}
            </InfoSectionContainer>
            <InfoSectionContainer>
              <ProfileContainer>
                <Avatar>{el.user.nickname[0]}</Avatar>
                <ProfileTextDataContainer>
                  <BodyTextSm weight={600}>{el.user.nickname}</BodyTextSm>
                  <BodyTextSm color={Colors.gray1}>{el.createdAt}</BodyTextSm>
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
