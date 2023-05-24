import { Avatar, Rate } from 'antd'
import * as S from './seriesAnswerList.styles'
import { seriesItem } from '@/common/dummyData/series'
import SeriesAnswerWrite from '../write/seriesAnswerWrite.container'

export default function SeriesAnswerListUI(props) {
  const reviews = props.data?.fetchSeriesReviewsBySeries

  return (
    <S.Container>
      <S.ReviewHeaderWrapper>
        <S.ReviewTitle>
          리뷰
          <S.CommentRate>
            <Rate disabled value={props.rate.fetchRatingBySeries} />
          </S.CommentRate>
        </S.ReviewTitle>
        <S.ReviewCount>{reviews?.length}개의 댓글</S.ReviewCount>
      </S.ReviewHeaderWrapper>
      <S.ReviewListContainer>
        {reviews?.length ? (
          <>
            {reviews.map(el => (
              <>
                <S.ReviewList>
                  <S.ReviewListTopWrapper>
                    <S.AvatarWrapper>
                      <S.Avatar src="/images/avatar.png" />
                      <S.Info>
                        <S.Writer>{el.user.nickname}</S.Writer>
                        <S.CreatedAt>{el.updatedAt}</S.CreatedAt>
                      </S.Info>
                      <S.UserRate>
                        <Rate disabled value={el.rating} />
                      </S.UserRate>
                    </S.AvatarWrapper>
                    <S.Contents>{el.content}</S.Contents>
                    <S.ButtonWrapper>
                      <button onClick={props.onClickUpdateReview}>수정</button>
                      <button onClick={props.onClickDeleteReview(el.reviewId)}>삭제</button>
                    </S.ButtonWrapper>
                  </S.ReviewListTopWrapper>
                  {props.isEditReview && (
                    <SeriesAnswerWrite
                      isEditReview={true}
                      setIsEditReview={props.setIsEditReview}
                      reviewId={el.reviewId}
                    />
                  )}
                </S.ReviewList>
              </>
            ))}
          </>
        ) : (
          <>
            <S.ReviewListNoTitle>댓글이 없어요!</S.ReviewListNoTitle>
            <S.ReviewListNoSubTitle>댓글을 달아 소통을 시작해보세요.</S.ReviewListNoSubTitle>
          </>
        )}
      </S.ReviewListContainer>
    </S.Container>
  )
}
