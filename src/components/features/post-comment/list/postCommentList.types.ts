import { IQuery, IQueryFetchPostCommentsArgs } from '@/common/types/generated/types'

export interface IPostCommentListUIProps {
  data?: Pick<IQuery, 'fetchPostComments'>
}

export interface IPostCommentListUIItemProps {
  comment: any
}
