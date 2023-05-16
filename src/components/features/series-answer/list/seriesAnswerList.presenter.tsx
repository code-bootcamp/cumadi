import { Rate } from 'antd'
import * as S from './seriesAnswerList.styles'
import { seriesItem } from '@/common/dummyData/series'

export default function SeriesAnswerListUI() {
  return (
    <>
      <S.CommentWrapper>
        <S.CommentTitle>리뷰<S.CommentRate><Rate disabled value={4}/></S.CommentRate></S.CommentTitle>
        <S.CommentCount>{seriesItem[0].review?.length}개의 댓글</S.CommentCount>
      </S.CommentWrapper>
      {seriesItem[0].review?.map(el => 
        <div> 
          <S.CommentListWrapper>
            <S.CommentList>
              <S.Header>
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
                <S.PostUpdateBtnWrapper>
                  <button>수정</button>
                  <button>삭제</button>
                </S.PostUpdateBtnWrapper>
              </S.Header>
              <S.Contents>{el.contents}</S.Contents>
            </S.CommentList>
          </S.CommentListWrapper>
        </div>
      )}
    <S.LastWrapper />
    </>
  )
}
