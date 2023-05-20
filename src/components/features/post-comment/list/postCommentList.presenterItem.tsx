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

export default function PostCommentListUIItem(props: IPostCommentListUIItemProps) {
  const router = useRouter()
  const postId = String(router.query.postId)

  // **** 상태
  const [isPostCommentEdit, setIsPostCommentEdit] = useState(false)
  const [isPostCommentAnswer, setIsPostCommentAnswer] = useState(false)

  // **** PlayGround
  const [deletePostComment] = useMutation(DELETE_POST_QUESTION)

  // **** 댓글 삭제
  const onClickDeletePostComment = async () => {
    if (!confirm('삭제하시면 복구할수 없습니다. \n정말로 삭제하시겠습니까??')) return false
    try {
      await deletePostComment({
        variables: {
          commentId: props.comment?.commentId,
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

  const onClickUpdatePostCommentBtn = () => setIsPostCommentEdit(prev => !prev)
  const onClickPostCommentAnswerBtn = () => setIsPostCommentAnswer(prev => !prev)

  return (
    <>
      {/* (댓글수정) 수정 여부가 false면, 기존 내용을 조건렌더링 */}
      {!isPostCommentEdit && (
        <S.CommentList key={props.comment?.commentId}>
          <S.CommentTop>
            <S.AvatarWrapper>
              <S.Avatar src="/images/avatar.png" />
              <S.AvatarIntro>
                <div>{props.comment?.user.nickname}</div>
                <S.Date>{getCreateDate(props.comment?.updatedAt)}</S.Date>
              </S.AvatarIntro>
            </S.AvatarWrapper>
            <S.ButtonWrapper>
              <button onClick={onClickUpdatePostCommentBtn}>수정</button>
              <button onClick={onClickPostCommentAnswerBtn}>답변</button>
              <button onClick={onClickDeletePostComment}>
                <CloseOutlined />
              </button>
            </S.ButtonWrapper>
          </S.CommentTop>
          <S.Contents>{props.comment?.content}</S.Contents>
          {/* (답변댓글) */}
        </S.CommentList>
      )}
      {/* (댓글수정) 수정 여부가 true면, 수정할 내용을 조건렌더링 */}
      {isPostCommentEdit && (
        <PostCommentWrite
          isPostCommentEdit={true}
          setIsPostCommentEdit={setIsPostCommentEdit}
          comment={props.comment}
        />
      )}
    </>
  )
}
