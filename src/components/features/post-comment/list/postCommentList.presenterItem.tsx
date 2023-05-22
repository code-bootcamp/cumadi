import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CloseOutlined } from '@ant-design/icons'

import * as S from './postCommentList.styles'
import { getCreateDate } from '@/common/libraries/utils'
import PostCommentWrite from '../write/postCommentWrite.container'
import { DELETE_POST_QUESTION, FETCH_POST_COMMENTS } from './postCommentList.queries'
import { IPostCommentListUIItemProps } from './postCommentList.types'
import PostAnswerList from '../../post-comment-answer/liat/postAnswerList.container'
import PostAnswerWrite from '../../post-comment-answer/write/postAnswerWrite.container'

export default function PostCommentListUIItem({ comment }: IPostCommentListUIItemProps) {
  const router = useRouter()
  const postId = String(router.query.postId)

  // **** 상태
  const [isEditPostComment, setIsEditPostComment] = useState(false)
  const [isActivePostAnswer, setIsActivePostAnswer] = useState(false)

  // **** PlayGround
  const [deletePostComment] = useMutation(DELETE_POST_QUESTION)

  // **** 댓글 삭제
  const onClickDeletePostComment = async () => {
    if (!confirm('삭제하시면 복구할수 없습니다. \n정말로 삭제하시겠습니까??')) return false
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
              <S.Avatar src="/images/avatar.png" />
              <S.AvatarIntro>
                <div>{comment?.user.nickname}</div>
                <S.Date>{getCreateDate(comment?.updatedAt)}</S.Date>
              </S.AvatarIntro>
            </S.AvatarWrapper>
            <S.ButtonWrapper>
              <button onClick={onClickUpdatePostComment}>수정</button>
              <button onClick={onClickActiveCommentAnswer}>답변</button>
              <button onClick={onClickDeletePostComment}>
                <CloseOutlined />
              </button>
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
