import { Rate } from 'antd'
import * as S from './seriesAnswerList.styles'

export default function SeriesAnswerListUI() {
  return (
    <>
      <S.CommentWrapper>
        <S.CommentTitle>리뷰<S.CommentRate><Rate disabled value={4}/></S.CommentRate></S.CommentTitle>
        <S.CommentCount>0개의 댓글</S.CommentCount>
      </S.CommentWrapper>
      <S.CommentListWrapper>
        <S.CommentList>
          <S.Header>
            <S.AvatarWrapper>
              <S.Avatar src="/images/avatar.png" />
              <S.Info>
                <S.Writer>개발자A</S.Writer>
                <S.CreatedAt>2020.05.01</S.CreatedAt>
              </S.Info>
              <S.UserRate>
                <Rate disabled value={5} />
              </S.UserRate>
              
            </S.AvatarWrapper>
            <S.PostUpdateBtnWrapper>
              <button>수정</button>
              <button>삭제</button>
            </S.PostUpdateBtnWrapper>
          </S.Header>
          <S.Contents>와! ddas유익해요</S.Contents>
        </S.CommentList>
      </S.CommentListWrapper>
    </>
  )
}
