import { seriesItem } from '@/common/dummyData/series'
import * as S from './seriesDetail.styles'
import SeriesAnswerList from '../../series-answer/list/seriesAnswerList.container'
import SeriesAnswerWrite from '../../series-answer/write/seriesAnswerWrite.container'
import BasicButton from '@/components/common/buttons/basic'
import { ReactionContainer, ReactionsContainer } from '@/components/common/customComponent.styles'
import { HeartOutlined, CommentOutlined } from '@ant-design/icons'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'

export default function SeriesDetailUI() {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.Container>
      <div>
        <S.PostTitle>{seriesItem[0].title}</S.PostTitle>
        <S.PostSubTitle>{seriesItem[0].introduction}</S.PostSubTitle>
        <S.PostTagWapper>
          <S.Category>{seriesItem[0].categories}</S.Category>
          <S.TopTag>주간 2위</S.TopTag>
        </S.PostTagWapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.Info>
              <S.Writer>{seriesItem[0].name}</S.Writer>
              <S.CreatedAt>{seriesItem[0].createDate}</S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
          <S.PostUpdateBtnWrapper>
            <S.SeriesButton>수정</S.SeriesButton>
            <S.SeriesButton>삭제</S.SeriesButton>
          </S.PostUpdateBtnWrapper>
        </S.Header>
        <S.PriceWrapper>
          <S.Sell>판매가 : <S.Price>{seriesItem[0].price}</S.Price></S.Sell>
          <S.ButtonWrapper>
            <BasicButton movePage={'/login'} name={'장바구니에 담기'} />
            <BasicButton movePage={'/login'} name={'바로 구매하기'} type="primary" />
          </S.ButtonWrapper>
        </S.PriceWrapper>
        <S.PostsSub>
          <S.PostCount>2개의 포스트 <S.Update>마지막 업데이트 {seriesItem[0].createDate}</S.Update></S.PostCount>
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
