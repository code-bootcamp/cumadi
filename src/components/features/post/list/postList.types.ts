import { IQuery } from '@/common/types/generated/types'

export interface IPostListUIProps {
  data?: Pick<IQuery, 'fetchPosts'>
  onLoadMore?: () => void
}
