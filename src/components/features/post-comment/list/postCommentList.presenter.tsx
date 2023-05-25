import * as S from './postCommentList.styles'
import PostCommentListUIItem from './postCommentList.presenterItem'
import { IPostCommentListUIProps } from './postCommentList.types'

export default function PostCommentListUI({ commentsData }: IPostCommentListUIProps) {
  const COMMENTS = commentsData?.fetchPostComments

  return (
    <S.Container>
      <S.CommentHeaderWrapper>
        <S.CommentTitle>댓글</S.CommentTitle>
        <S.CommentCount>{COMMENTS?.length}개의 댓글</S.CommentCount>
      </S.CommentHeaderWrapper>
      <S.CommentListContainer>
        {/* 댓글이 1개라도 존재하면 */}
        {COMMENTS?.length ? (
          <>
            {COMMENTS.map(comment => (
              <PostCommentListUIItem
                key={comment.commentId} //
                comment={comment}
              />
            ))}
          </>
        ) : (
          <>
            {/* 댓글이 없다면 */}
            <S.CommentListNoTitle style={{ marginBottom: '.5rem' }}>댓글이 없어요!</S.CommentListNoTitle>
            <S.CommentListNoSubTitle>댓글을 달아 소통을 시작해보세요.</S.CommentListNoSubTitle>
          </>
        )}
      </S.CommentListContainer>
    </S.Container>
  )
}
