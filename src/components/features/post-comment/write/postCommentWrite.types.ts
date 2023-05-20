import { ChangeEvent } from 'react'

export interface IPostCommentWriteUIProps {
  onChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void
  onClickCreateComment: () => void
  onClickUpdateComment: () => void
  content: string
  isPostCommentEdit: boolean
  comment: any
}

export interface IUpdateContent {
  content?: string
}
