import { Avatar, Modal } from 'antd'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { CloseOutlined } from '@ant-design/icons'

import * as S from './postCommentList.styles'
import { getCreateDate } from '@/common/libraries/utils'
import PostCommentWrite from '../write/postCommentWrite.container'
import { DELETE_POST_QUESTION, FETCH_POST_COMMENTS, FETCH_POST_COMMENT_ANSWER } from './postCommentList.queries'
import { IPostCommentListUIItemProps } from './postCommentList.types'
import PostAnswerList from '../../post-comment-answer/liat/postAnswerList.container'
import PostAnswerWrite from '../../post-comment-answer/write/postAnswerWrite.container'
import {
  IMutation,
  IMutationDeletePostCommentArgs,
  IQuery,
  IQueryFetchPostCommentAnswerArgs,
} from '@/common/types/generated/types'
import { FETCH_USER_LOGGED_IN } from '../../post/detail/postDetail.queries'

export default function PostCommentListUIItem({ comment }: IPostCommentListUIItemProps) {
  const router = useRouter()
  const postId = String(router.query.postId)
  const commentId = comment.commentId

  // **** 상태
  const [isEditPostComment, setIsEditPostComment] = useState(false)
  const [isActivePostAnswer, setIsActivePostAnswer] = useState(false)

  // **** PlayGround
  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN)

  const { data: PostCommentAnswerData } = useQuery<
    Pick<IQuery, 'fetchPostCommentAnswer'>,
    IQueryFetchPostCommentAnswerArgs
  >(FETCH_POST_COMMENT_ANSWER, { variables: { commentId } })
  const [deletePostComment] = useMutation<Pick<IMutation, 'deletePostComment'>, IMutationDeletePostCommentArgs>(
    DELETE_POST_QUESTION,
  )

  const CommentAnswer = PostCommentAnswerData?.fetchPostCommentAnswer

  // **** 댓글 삭제
  const onClickDeletePostComment = async () => {
    if (!confirm('덧글을 복구할 수 없습니다. \n정말로 삭제하시겠습니까??')) return false
    try {
      await deletePostComment({
        variables: {
          commentId: comment?.commentId,
        },
        refetchQueries: [
          {
            query: FETCH_POST_COMMENTS,
            variables: { postId },
          },
        ],
      })
      Modal.success({ content: '댓글을 삭제했습니다!' })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  const onClickUpdatePostComment = () => setIsEditPostComment(prev => !prev)
  const onClickActiveCommentAnswer = () => setIsActivePostAnswer(prev => !prev)

  return (
    <>
      {/* 기본 렌더링 */}
      {!isEditPostComment && (
        <S.CommentList key={comment?.commentId}>
          <S.CommentTopWrapper>
            <S.AvatarWrapper>
              <Avatar src={comment?.user.image ?? ''} style={{ width: '2.5rem', height: '2.5rem' }}>
                {comment?.user.nickname[0]}
              </Avatar>
              <S.AvatarIntro>
                <div>{comment?.user.nickname}</div>
                <S.Date>{getCreateDate(comment?.updatedAt)}</S.Date>
              </S.AvatarIntro>
            </S.AvatarWrapper>

            <S.ButtonWrapper>
              {comment?.user.userId === loginData?.fetchUserLoggedIn?.userId ? (
                <button onClick={onClickUpdatePostComment}>수정</button>
              ) : null}
              {!CommentAnswer && <button onClick={onClickActiveCommentAnswer}>답변</button>}

              {comment?.user.userId === loginData?.fetchUserLoggedIn?.userId ? (
                <button onClick={onClickDeletePostComment}>
                  <CloseOutlined />
                </button>
              ) : null}
            </S.ButtonWrapper>
          </S.CommentTopWrapper>
          <S.Contents>{comment?.content}</S.Contents>
        </S.CommentList>
      )}
      {/* 댓글 수정 클릭 시 */}
      {isEditPostComment && (
        <PostCommentWrite isEditPostComment={true} setIsEditPostComment={setIsEditPostComment} comment={comment} />
      )}
      {/* 답변댓글 */}
      {isActivePostAnswer && (
        <PostAnswerWrite
          isActivePostAnswer={true}
          onClickActiveCommentAnswer={onClickActiveCommentAnswer}
          comment={comment}
        />
      )}
      <PostAnswerList commentId={comment.commentId} />
    </>
  )
}
