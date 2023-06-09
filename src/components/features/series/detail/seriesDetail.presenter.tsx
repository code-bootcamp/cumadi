import * as S from './seriesDetail.styles'
import SeriesAnswerList from '../../series-answer/list/seriesAnswerList.container'
import SeriesAnswerWrite from '../../series-answer/write/seriesAnswerWrite.container'
import { EmptyStateContainer, ReactionContainer, ReactionsContainer } from '@/components/common/customComponent.styles'
import { HeartOutlined, CommentOutlined, PlusOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import { Avatar, Empty } from 'antd'
import { BodyTextSm } from '@/common/styles/globalStyles'

export default function SeriesDetailUI(props: any) {
  const category = props.data?.fetchSeries.category.name

  return (
    <S.Container>
      <div>
        <S.PostTitle>{props.data?.fetchSeries.title}</S.PostTitle>
        <S.PostSubTitle>{props.data?.fetchSeries.introduction}</S.PostSubTitle>
        <S.PostTagWapper>
          <S.Category>{props.data?.fetchSeries.category.name}</S.Category>
          {/* <S.TopTag>주간 2위</S.TopTag> */}
        </S.PostTagWapper>
        <S.Header>
          <S.AvatarWrapper>
            <Avatar>{props.data?.fetchSeries.user.nickname[0]}</Avatar>
            <S.Info>
              <S.Writer>{props.data?.fetchSeries.user.nickname}</S.Writer>
              <S.CreatedAt>{props.data?.fetchSeries.user.introduction}</S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
          {props.isWriterData ? (
            <S.PostUpdateBtnWrapper>
              <S.SeriesButton onClick={props.onClickUpdate}>수정</S.SeriesButton>
              <S.SeriesButton onClick={props.onClickDelete}>삭제</S.SeriesButton>
            </S.PostUpdateBtnWrapper>
          ) : (
            <div></div>
          )}
        </S.Header>
        <S.PriceWrapper>
          <S.Sell>
            판매가 ·{' '}
            {props.data?.fetchSeries.price === 0 ? (
              <S.Price>무료</S.Price>
            ) : (
              <S.Price>{props.data?.fetchSeries.price}원</S.Price>
            )}
          </S.Sell>

          <S.ButtonWrapper>
            <S.CartButton onClick={props.onClickCart}>장바구니에 담기</S.CartButton>
            <S.CartButton onClick={props.onClickBuy} type="primary">
              바로 구매하기
            </S.CartButton>
          </S.ButtonWrapper>
        </S.PriceWrapper>
        <S.PostsSub>
          <S.PostCount>
            {props.data?.fetchSeries.post?.length}개의 포스트{' '}
            <S.Update>마지막 업데이트 {dayjs(props.data?.fetchSeries.createdAt).format('YYYY.MM.DD')}</S.Update>
          </S.PostCount>
          {props.isWriterData ? (
            <S.NewPostsButton onClick={props.onClickMoveToPage('/post/new')} icon={<PlusOutlined />}>
              포스트 작성하기
            </S.NewPostsButton>
          ) : null}
        </S.PostsSub>
        <BodyTextSm>* 시리즈를 구매하신 후 열람하실 수 있습니다.</BodyTextSm>
        {props.data?.fetchSeries.post?.map((el: any) => (
          <S.PostWrapper key={el.seriesId}>
            <S.ImageWrapper>
              {el.image ? (
                <S.Image key={el.image} src={el.image} />
              ) : (
                <EmptyStateContainer>
                  <Empty description={<span>이미지가 없습니다.</span>} />
                </EmptyStateContainer>
              )}
            </S.ImageWrapper>
            <S.DescriptionWrapper>
              <S.PostCategory>{category}</S.PostCategory>
              <S.PostName>{el.title}</S.PostName>
              <S.PostName2>{el.description}</S.PostName2>
              <S.PostIntro>{el.contents}</S.PostIntro>
              <S.PostsSub>
                <S.PostIntro>{dayjs(el.createdAt).format('YYYY.MM.DD')}</S.PostIntro>
                <ReactionsContainer>
                  <ReactionContainer>
                    <HeartOutlined />
                    <span>{el.likes?.length}</span>
                  </ReactionContainer>
                  <ReactionContainer>
                    <CommentOutlined />
                    <span>{el.comments?.length}</span>
                  </ReactionContainer>
                </ReactionsContainer>
              </S.PostsSub>
            </S.DescriptionWrapper>
          </S.PostWrapper>
        ))}
      </div>
      <SeriesAnswerList />
      <SeriesAnswerWrite />
    </S.Container>
  )
}
