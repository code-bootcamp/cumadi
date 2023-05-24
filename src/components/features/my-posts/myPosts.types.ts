import { IQuery } from '@/common/types/generated/types'

export interface IMyPostsUIProps {
  data?: Pick<IQuery, 'fetchPostsOfMine'>
}
