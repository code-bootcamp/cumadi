import { IQuery } from '@/common/types/generated/types'

export interface IMySeriesUIProps {
  data?: Pick<IQuery, 'fetchSeriesByUser'>
  loginData?: Pick<IQuery, 'fetchUserLoggedIn'>
}
