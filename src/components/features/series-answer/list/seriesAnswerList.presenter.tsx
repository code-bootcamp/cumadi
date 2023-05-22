import { Rate } from 'antd'
import * as S from './seriesAnswerList.styles'
import { seriesItem } from '@/common/dummyData/series'

export default function SeriesAnswerListUI(props) {
  // const seriesRate = props.rate;
  const reviews = props.data?.fetchSeriesReviewsBySeries

  return (
    <S.Container>
      <S.ReviewHeaderWrapper>
        <S.ReviewTitle>리뷰<S.CommentRate><Rate disabled value={4}/></S.CommentRate></S.ReviewTitle>
        <S.ReviewCount>{reviews?.length}개의 댓글</S.ReviewCount>
      </S.ReviewHeaderWrapper>
      <S.ReviewListContainer>
        {reviews?.length ? (
          <>
            {reviews.map(el => 
              <> 
                <S.ReviewList>
                  <S.ReviewListTopWrapper>
                      <S.AvatarWrapper>
                        <S.Avatar src="/images/avatar.png" />
                        <S.Info>
                          <S.Writer>{el.name}</S.Writer>
                          <S.CreatedAt>{el.createDate}</S.CreatedAt>
                        </S.Info>
                        <S.UserRate>
                          <Rate disabled value={el.star} />
                        </S.UserRate>
                      </S.AvatarWrapper>
                      <S.ButtonWrapper>
                        <button>수정</button>
                        <button>삭제</button>
                      </S.ButtonWrapper>
                    <S.Contents>{el.contents}</S.Contents>
                    {/* 댓글수정시 */}
                  </S.ReviewListTopWrapper>
                </S.ReviewList>
              </>
            )}
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
