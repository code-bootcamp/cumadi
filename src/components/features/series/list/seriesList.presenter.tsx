import { Avatar, Empty } from 'antd'
import * as S from './seriesList.styles'
import {
  DotLeft,
  EmptyStateContainer,
  FlexColumnContainer,
  MyButton,
} from '@/components/common/customComponent.styles'
import { BodyTextLg, BodyTextSm } from '@/common/styles/globalStyles'
import { InfoSectionContainer } from '@/components/common/customComponent.styles'
import { ProfileContainer } from '@/components/common/customComponent.styles'
import { ProfileTextDataContainer } from '@/components/common/customComponent.styles'
import { ReactionContainer } from '@/components/common/customComponent.styles'
import { ReactionsContainer } from '@/components/common/customComponent.styles'
import { Colors } from '@/common/styles/colors'
import { Rate } from 'antd'
import dayjs from 'dayjs'

export default function SeriesListUI(props: any) {
  return (
    <>
      <S.TitleWrapper>
        <S.Title>내 맘대로. 내 입맛대로.</S.Title>
        <S.ButtonWrapper>
          <MyButton type="text" onClick={props.onClickMoveToPage('./')}>
            포스트
          </MyButton>
          <MyButton type="primary" onClick={props.onClickMoveToPage('./series')}>
            시리즈
          </MyButton>
        </S.ButtonWrapper>
        <S.categoryWrapper>
          <S.EmptySpace>공간 채우기용 임다용</S.EmptySpace>
          <S.TagBar>
            <S.TopTag isClicked={props.isShowAll ? true : false} onClick={props.onClickAllSeries}>
              전체
            </S.TopTag>
            {props.category?.fetchSeriesCategories?.map((category: any, index: number) => (
              <S.TopTag
                onClick={props.onClickCategory(category.categoryId, index)}
                isClicked={props.countIndex === index ? true : false}>
                {category.name}
              </S.TopTag>
            ))}
          </S.TagBar>
          <S.ToggleWrapper>
            <S.FreeToggle>무료 시리즈만 보기</S.FreeToggle>
            <S.FreeSwitch checked={props.isfreeOn} onChange={props.onClickFreeSeries} />
          </S.ToggleWrapper>
        </S.categoryWrapper>
      </S.TitleWrapper>
      <S.Body>
        {props.isShowAll ? (
          <>
            {props.data?.fetchSeriesAll.map((el: any) => (
              <S.StyledCard
                isfree={props.isfreeOn}
                itemPrice={el.price}
                cover={
                  el.image ? (
                    <S.CardThumbnailImg
                      alt="example"
                      src={el.image}
                      onClick={props.onClickMoveToPage(`/series/${el.seriesId}`)}
                    />
                  ) : (
                    <EmptyStateContainer onClick={props.onClickMoveToPage(`/series/${el.seriesId}`)}>
                      <Empty description={<span>이미지가 없습니다.</span>} />
                    </EmptyStateContainer>
                  )
                }>
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
                        <BodyTextSm color={Colors.gray1}>{dayjs(el.createdAt).format('YYYY.MM.DD')}</BodyTextSm>
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
            {props.menu?.fetchSeriesByCategory.map((el: any) => (
              <S.StyledCard
                isfree={props.isfreeOn}
                itemPrice={el.price}
                cover={
                  el.image ? (
                    <S.CardThumbnailImg
                      alt="example"
                      src={el.image}
                      onClick={props.onClickMoveToPage(`/series/${el.seriesId}`)}
                    />
                  ) : (
                    <EmptyStateContainer>
                      <Empty description={<span>이미지가 없습니다.</span>} />
                    </EmptyStateContainer>
                  )
                }>
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
                        <BodyTextSm color={Colors.gray1}>{dayjs(el.createdAt).format('YYYY.MM.DD')}</BodyTextSm>
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
        <DotLeft />
      </S.Body>
    </>
  )
}
