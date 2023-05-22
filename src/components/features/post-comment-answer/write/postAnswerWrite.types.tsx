import { ChangeEvent, MouseEvent } from 'react'

export interface IPostAnswerWriteProps {
  onClickActiveCommentAnswer?: () => void
  onClickEditAnswer?: () => void
  comment?: any
  isActivePostAnswer?: boolean
  isEditCommentAnswer?: boolean
  CommentAnswer?: any
}

export interface IPostAnserWriteUIProps {
  content?: string
  comment?: any
  CommentAnswer?: any
  isActivePostAnswer?: boolean
  onChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void
  onClickCreateAnswer: (event: MouseEvent<HTMLButtonElement>) => void
  onClickUpdateAnswer: (event: MouseEvent<HTMLButtonElement>) => void
}
