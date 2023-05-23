import { ChangeEvent } from 'react'

export interface IPostCommentWriteUIProps {
  onChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void
  onClickCreateComment: () => void
  onClickUpdateComment: () => void
  content: string
  isEditPostComment: boolean
  comment: any
}

export interface IUpdateContent {
  content?: string
}

export interface PostCommentWriteProps {
  isEditPostComment: boolean
  setIsEditPostComment?: any
  comment?: any
}
