import { Avatar } from 'antd'
import * as S from './seriesList.styles'
import { FlexColumnContainer, MyTag } from '@/components/common/customComponent.styles'
import { BodyTextLg, BodyTextSm } from '@/common/styles/globalStyles'
import { InfoSectionContainer } from '@/components/common/customComponent.styles'
import { ProfileContainer } from '@/components/common/customComponent.styles'
import { ProfileTextDataContainer } from '@/components/common/customComponent.styles'
import { ReactionContainer } from '@/components/common/customComponent.styles'
import { ReactionsContainer } from '@/components/common/customComponent.styles'
import { Colors } from '@/common/styles/colors'
import { Rate } from 'antd';

export default function SeriesListUI(props: any) {
  return (
    <S.Body>
      <S.TitleWrapper>
        <S.Title>내 맘대로. 내 입맛대로.</S.Title>
        <S.TagWrapper>
          <MyTag isChecked={false} onClick={props.onClickMoveToPage('./')}>
            포스트
          </MyTag>
          <MyTag isChecked={true} onClick={props.onClickMoveToPage('./series')}>
            시리즈
          </MyTag>
        </S.TagWrapper>

        <S.TagWrapper>
          <S.TopTag isClicked={props.isShowAll ? true : false} onClick={props.onClickAllSeries}>전체</S.TopTag>
          {props.category?.fetchSeriesCategories?.map((category: any, index: number) => (
              <S.TopTag
                onClick={props.onClickCategory(category.categoryId, index)}
                isClicked={props.countIndex === index ? true : false}
              >{category.name}</S.TopTag>
          ))}
        </S.TagWrapper>

      </S.TitleWrapper>
      {props.isShowAll ? (
        <>
          {props.data?.fetchSeriesAll.map(el => (
            <S.StyledCard cover={
              <S.CardThumbnailImg alt="example" src={'/images/no-image.jpeg'} onClick={props.onClickMoveToPage(`/series/${el.seriesId}`)} />}>
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
        </>
      ) : (
        <>
          {props.menu?.fetchSeriesByCategory.map(el => (
            <S.StyledCard cover={
              <S.CardThumbnailImg alt="example" src={'/images/no-image.jpeg'} onClick={props.onClickMoveToPage(`/series/${el.seriesId}`)} />}>
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
        </>
      )}
    </S.Body>
  )
}
