import { useMutation, useQuery } from '@apollo/client'
import { MouseEvent } from 'react'
import { Modal } from 'antd'

import PostAnswerListUI from './postAnswerList.presenter'
import { DELETE_POST_COMMENT_ANSWER, FETCH_POST_COMMENT_ANSWER } from './postAnswerList.queries'
import {
  IMutation,
  IMutationDeletePostCommentAnswerArgs,
  IQuery,
  IQueryFetchPostCommentAnswerArgs,
} from '@/common/types/generated/types'
import { IPostAnswerListProps } from './postAnswerList.types'

export default function PostAnswerList({ onClickActiveCommentAnswer, commentId }: IPostAnswerListProps) {
  // **** PlayGround
  const { data: PostCommentAnswerData } = useQuery<
    Pick<IQuery, 'fetchPostCommentAnswer'>,
    IQueryFetchPostCommentAnswerArgs
  >(FETCH_POST_COMMENT_ANSWER, { variables: { commentId } })
  const [deletePostCommentAnswer] = useMutation<
    Pick<IMutation, 'deletePostCommentAnswer'>,
    IMutationDeletePostCommentAnswerArgs
  >(DELETE_POST_COMMENT_ANSWER)

  // **** 답변댓글 삭제
  const onClickDeleteAnswer = async (event: MouseEvent<HTMLButtonElement>) => {
    if (!confirm('삭제하시면 복구할수 없습니다. \n정말로 삭제하시겠습니까??')) return false

    try {
      await deletePostCommentAnswer({
        variables: {
          answerId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_POST_COMMENT_ANSWER,
            variables: { commentId },
          },
        ],
      })
      Modal.success({ content: '답변댓글을 삭제했습니다!' })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return <PostAnswerListUI PostCommentAnswerData={PostCommentAnswerData} onClickDeleteAnswer={onClickDeleteAnswer} />
}
