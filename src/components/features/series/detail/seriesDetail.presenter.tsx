import { seriesItem } from '@/common/dummyData/series'
import * as S from './seriesDetail.styles'
import SeriesAnswerList from '../../series-answer/list/seriesAnswerList.container'
import SeriesAnswerWrite from '../../series-answer/write/seriesAnswerWrite.container'
import BasicButton from '@/components/common/buttons/basic'
import { ReactionContainer, ReactionsContainer } from '@/components/common/customComponent.styles'
import { HeartOutlined, CommentOutlined } from '@ant-design/icons'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'

export default function SeriesDetailUI(props: any) {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.Container>
      <div>
        <S.PostTitle>{props.data?.fetchSeries.title}</S.PostTitle>
        <S.PostSubTitle>{props.data?.fetchSeries.introduction}</S.PostSubTitle>
        <S.PostTagWapper>
          <S.Category>{props.data?.fetchSeries.category.name}</S.Category>
          <S.TopTag>주간 2위</S.TopTag>
        </S.PostTagWapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.Info>
              <S.Writer>{props.data?.fetchSeries.user.nickname}</S.Writer>
              <S.CreatedAt>작성자 소개</S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
            {props.isWriterData ? (
              <S.PostUpdateBtnWrapper>
                <S.SeriesButton>수정</S.SeriesButton>
                <S.SeriesButton onClick={props.onClickDelete}>삭제</S.SeriesButton>
              </S.PostUpdateBtnWrapper>
            ) : (
              <div></div>
            )}
        </S.Header>
        <S.PriceWrapper>
          <S.Sell>판매가 · {props.data?.fetchSeries.price === 0 ? <S.Price>무료</S.Price> : <S.Price>{props.data?.fetchSeries.price}원</S.Price>}</S.Sell>
          
          <S.ButtonWrapper>
            <S.CartButton onClick={props.onClickCart}>장바구니에 담기</S.CartButton>
            <BasicButton movePage={'/login'} name={'바로 구매하기'} type="primary" />
          </S.ButtonWrapper>
        </S.PriceWrapper>
        <S.PostsSub>
          
          <S.PostCount>{seriesItem[0].posts?.length}개의 포스트 <S.Update>마지막 업데이트 {props.data?.fetchSeries.createdAt}</S.Update></S.PostCount>
          <S.NewPostsButton>+ 새 포스트 작성하기</S.NewPostsButton>
        </S.PostsSub>
        {seriesItem[0].posts?.map(el => 
          <S.PostWrapper>
            <S.ImageWrapper>
              <S.Image src={el.image} onClick={onClickMoveToPage(`/post/${el.id}`)} />
            </S.ImageWrapper>
            <S.DescriptionWrapper>
              <S.PostCategory>{el.categories}</S.PostCategory>
              <S.PostName>{el.title}</S.PostName>
              <S.PostName2>{el.intro}</S.PostName2>
              <S.PostIntro>{el.contents}</S.PostIntro>
              <S.PostsSub>
                <S.PostIntro>{el.createDate}</S.PostIntro>
                <ReactionsContainer>
                  <ReactionContainer>
                    <HeartOutlined />
                    <span>{el.pickedcount}</span>
                  </ReactionContainer>
                  <ReactionContainer>
                    <CommentOutlined />
                    <span>{el.comment}</span>
                  </ReactionContainer>
                </ReactionsContainer>
              </S.PostsSub>
            </S.DescriptionWrapper>
          </S.PostWrapper>
        )}
      </div>
      <SeriesAnswerList />
      <SeriesAnswerWrite />
    </S.Container>
  )
}
