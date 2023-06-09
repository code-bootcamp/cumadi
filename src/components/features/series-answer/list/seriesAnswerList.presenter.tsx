import { Avatar, Rate } from 'antd'

import * as S from './seriesAnswerList.styles'
import SeriesAnswerWrite from '../write/seriesAnswerWrite.container'

export default function SeriesAnswerListUI(props: any) {
  const reviews = props.data?.fetchSeriesReviewsBySeries

  return (
    <S.Container>
      <S.ReviewHeaderWrapper>
        <S.ReviewTitle>
          리뷰
          <S.CommentRate>
            <Rate disabled value={props.rate?.fetchRatingBySeries} />
          </S.CommentRate>
        </S.ReviewTitle>
        <S.ReviewCount>{reviews?.length}개의 댓글</S.ReviewCount>
      </S.ReviewHeaderWrapper>
      <S.ReviewListContainer>
        <>
          {reviews?.length ? (
            <>
              {reviews.map((el: any) => (
                <>
                  {!props.isEditReview && (
                    <S.ReviewList>
                      <S.ReviewListTopWrapper>
                        <S.AvatarWrapper>
                          <Avatar>{el.user.nickname[0]}</Avatar>
                          <S.Info>
                            <S.Writer>{el.user.nickname}</S.Writer>
                            <S.CreatedAt>{el.updatedAt}</S.CreatedAt>
                          </S.Info>
                          <S.UserRate>
                            <Rate disabled value={el.rating} />
                          </S.UserRate>
                        </S.AvatarWrapper>
                        <S.Contents>{el.content}</S.Contents>
                        {el.user.userId === props.loginData?.fetchUserLoggedIn?.userId ? (
                          <S.ButtonWrapper>
                            <button onClick={props.onClickUpdateReview}>수정</button>
                            <button onClick={props.onClickDeleteReview(el.reviewId)}>삭제</button>
                          </S.ButtonWrapper>
                        ) : null}
                      </S.ReviewListTopWrapper>
                    </S.ReviewList>
                  )}
                  {props.isEditReview && (
                    <SeriesAnswerWrite
                      isEditReview={true}
                      setIsEditReview={props.setIsEditReview}
                      reviewId={el.reviewId}
                    />
                  )}
                </>
              ))}
            </>
          ) : (
            <>
              <S.ReviewListNoTitle style={{ marginBottom: '.5rem' }}>리뷰가 없어요!</S.ReviewListNoTitle>
              <S.ReviewListNoSubTitle>시리즈를 구매하고 리뷰를 남겨주세요.</S.ReviewListNoSubTitle>
            </>
          )}
        </>
      </S.ReviewListContainer>
    </S.Container>
  )
}
