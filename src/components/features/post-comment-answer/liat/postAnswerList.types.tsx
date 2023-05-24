import { MouseEvent } from 'react'

import { IQuery } from '@/common/types/generated/types'

export interface IPostAnswerListProps {
  commentId: string
}

export interface IPostAnswerListUIProps {
  PostCommentAnswerData?: Pick<IQuery, 'fetchPostCommentAnswer'>
  comment?: any
  onClickDeleteAnswer: (event: MouseEvent<HTMLButtonElement>) => void
}
