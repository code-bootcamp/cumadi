import { Modal } from 'antd'
import { useMutation } from '@apollo/client'
import { ChangeEvent, useState } from 'react'

import PostAnswerWriteUI from './postAnswerWrite.presenter'
import {
  CREATE_POST_COMMENT_ANSWER,
  FETCH_POST_COMMENT_ANSWER,
  UPDATE_POST_COMMENT_ANSWER,
} from './postAnswerWrite.queries'
import {
  IMutation,
  IMutationCreatePostCommentAnswerArgs,
  IMutationUpdatePostCommentAnswerArgs,
} from '@/common/types/generated/types'
import { IPostAnswerWriteProps } from './postAnswerWrite.types'

export default function PostAnswerWrite({
  onClickActiveCommentAnswer,
  onClickEditAnswer,
  comment,
  isActivePostAnswer,
  CommentAnswer,
}: IPostAnswerWriteProps) {
  const commentId = comment?.commentId
  const answerId = CommentAnswer?.answerId

  // **** 상태
  const [content, setContent] = useState('')

  // **** PlayGround
  const [createPostCommentAnswer] = useMutation<
    Pick<IMutation, 'createPostCommentAnswer'>,
    IMutationCreatePostCommentAnswerArgs
  >(CREATE_POST_COMMENT_ANSWER)
  const [updatePostCommentAnswer] = useMutation<
    Pick<IMutation, 'updatePostCommentAnswer'>,
    IMutationUpdatePostCommentAnswerArgs
  >(UPDATE_POST_COMMENT_ANSWER)

  // **** 답변 생성
  const onClickCreateAnswer = async () => {
    try {
      const result = await createPostCommentAnswer({
        variables: {
          commentId,
          content,
        },
        refetchQueries: [
          {
            query: FETCH_POST_COMMENT_ANSWER,
            variables: { commentId },
          },
        ],
      })
      setContent('')
      Modal.success({ content: '답변 댓글이 등록되었습니다!' })
      if (onClickActiveCommentAnswer !== undefined) onClickActiveCommentAnswer()
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  // **** 답변 수정
  const onClickUpdateAnswer = async () => {
    if (!content) {
      alert('내용이 수정되지 않았습니다.')
      return
    }
    try {
      const result = await updatePostCommentAnswer({
        variables: {
          answerId,
          newContent: content,
        },
        refetchQueries: [
          {
            query: FETCH_POST_COMMENT_ANSWER,
            variables: { commentId },
          },
        ],
      })

      setContent('')
      Modal.success({ content: '답변 댓글 수정되었습니다' })
      if (onClickEditAnswer !== undefined) onClickEditAnswer()
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  // **** 댓글 답변 값 전달
  const onChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => setContent(event.target.value)

  return (
    <PostAnswerWriteUI
      content={content}
      comment={comment}
      CommentAnswer={CommentAnswer}
      isActivePostAnswer={isActivePostAnswer}
      onChangeContent={onChangeContent}
      onClickCreateAnswer={onClickCreateAnswer}
      onClickUpdateAnswer={onClickUpdateAnswer}
    />
  )
}
