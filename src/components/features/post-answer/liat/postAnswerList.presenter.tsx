import * as S from './postAnswerList.styles'

export default function PostAnswerListUI() {
  return (
    <>
      <S.CommentWrapper>
        <S.CommentTitle>댓글</S.CommentTitle>
        <S.CommentCount>0개의 댓글</S.CommentCount>
      </S.CommentWrapper>
      <S.CommentListWrapper>
        <S.CommentListNoTitle>댓글이 없어요!</S.CommentListNoTitle>
        <S.CommentListNoSubTitle>댓글을 달아 소통을 시작해보세요.</S.CommentListNoSubTitle>

        <S.CommentList>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <div>
              <div>작성자</div>
              <S.Date>날짜</S.Date>
            </div>
          </S.AvatarWrapper>
          <S.Contents>와! ddas유익해요</S.Contents>
        </S.CommentList>
      </S.CommentListWrapper>
    </>
  )
}
