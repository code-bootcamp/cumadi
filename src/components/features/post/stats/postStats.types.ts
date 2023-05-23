import { IQuery } from '@/common/types/generated/types'

export interface IPostStatsProps {
  postData?: Pick<IQuery, 'fetchPost'>
}

export interface IPostStatsUIProps {
  stateData?: Pick<IQuery, 'fetchPostViewOfMine'>
}
