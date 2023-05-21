import { IQuery } from '@/common/types/generated/types'
import { MouseEvent } from 'react'

export interface IPostAnswerListProps {
  onClickActiveCommentAnswer: () => void
  commentId: string
}

export interface IPostAnswerListUIProps {
  PostCommentAnswerData?: Pick<IQuery, 'fetchPostCommentAnswer'>
  comment?: any
  onClickDeleteAnswer: (event: MouseEvent<HTMLButtonElement>) => void
}
