import { IComment, IQuery } from '@/common/types/generated/types'

export interface IPostCommentListUIProps {
  commentsData?: Pick<IQuery, 'fetchPostComments'>
}

export interface IPostCommentListUIItemProps {
  key: any
  comment: IComment
}
