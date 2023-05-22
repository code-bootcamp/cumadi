import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import { ChangeEvent, useState } from 'react'
import { Modal } from 'antd'

import PostCommentWriteUI from './postCommentWrite.presenter'
import { CREATE_POST_COMMENT, FETCH_POST_COMMENTS, UPDATE_POST_COMMENT } from './postCommentWrite.queries'
import {
  IMutation,
  IMutationCreatePostCommentArgs,
  IMutationUpdatePostCommentArgs,
} from '@/common/types/generated/types'
import { PostCommentWriteProps } from './postCommentWrite.types'

export default function PostCommentWrite({ comment, setIsEditPostComment, isEditPostComment }: PostCommentWriteProps) {
  const router = useRouter()
  const postId = String(router.query.postId)
  const commentId = comment?.commentId

  // **** 상태
  const [content, setContent] = useState('')

  // **** Playground
  const [createPostComment] = useMutation<Pick<IMutation, 'createPostComment'>, IMutationCreatePostCommentArgs>(
    CREATE_POST_COMMENT,
  )
  const [updatePostComment] = useMutation<Pick<IMutation, 'updatePostComment'>, IMutationUpdatePostCommentArgs>(
    UPDATE_POST_COMMENT,
  )

  // **** 포스트 댓글 작성
  const onClickCreateComment = async () => {
    try {
      await createPostComment({
        variables: {
          postId,
          content,
        },
        refetchQueries: [
          {
            query: FETCH_POST_COMMENTS,
            variables: { postId },
          },
        ],
      })
      Modal.success({ content: '댓글이 등록되었습니다!' })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
    // ** 댓글 등록하고 내용 초기화
    setContent('')
  }

  // **** 포스트 댓글 수정
  const onClickUpdateComment = async () => {
    if (!content) {
      alert('내용이 수정되지 않았습니다.')
      return
    }

    try {
      const result = await updatePostComment({
        variables: {
          commentId: commentId,
          updateContent: content,
        },
        refetchQueries: [
          {
            query: FETCH_POST_COMMENTS,
            variables: { postId },
          },
        ],
      })
      Modal.success({ content: '댓글이 수정되었습니다!' })
      // ** 수정 버튼을 클릭하고 완료되면, 수정여부를 false로
      setIsEditPostComment(false)
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  // **** 댓글 값 전달
  const onChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => setContent(event.target.value)

  return (
    <PostCommentWriteUI
      content={content}
      isEditPostComment={isEditPostComment}
      comment={comment}
      onChangeContent={onChangeContent}
      onClickCreateComment={onClickCreateComment}
      onClickUpdateComment={onClickUpdateComment}
    />
  )
}
