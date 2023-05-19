import { getCreateDate } from '@/common/libraries/utils'
import * as S from './postCommentList.styles'
// import getDate from '../../../../common/libraries/utils'
// interface IPostCommentListUIProps {}

export default function PostCommentListUI(props: any) {
  console.log(props.data?.fetchPostComments)
  const COMMENT_LENGTH = props.data?.fetchPostComments?.length

  return (
    <S.Container>
      <S.CommentWrapper>
        <S.CommentTitle>댓글</S.CommentTitle>
        <S.CommentCount>{COMMENT_LENGTH}개의 댓글</S.CommentCount>
      </S.CommentWrapper>
      <S.CommentListWrapper>
        {COMMENT_LENGTH ? (
          <>
            {props.data?.fetchPostComments.map((el: any) => (
              <S.CommentList>
                <S.AvatarWrapper>
                  <S.Avatar src="/images/avatar.png" />
                  <S.AvatarIntro>
                    <div>{el.user.nickname}</div>
                    <S.Date>{getCreateDate(el.updatedAt)}</S.Date>
                  </S.AvatarIntro>
                </S.AvatarWrapper>
                <S.Contents>{el.content}</S.Contents>
              </S.CommentList>
            ))}
          </>
        ) : (
          <>
            <S.CommentListNoTitle>댓글이 없어요!</S.CommentListNoTitle>
            <S.CommentListNoSubTitle>댓글을 달아 소통을 시작해보세요.</S.CommentListNoSubTitle>
          </>
        )}
      </S.CommentListWrapper>
    </S.Container>
  )
}
