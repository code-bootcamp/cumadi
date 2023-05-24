import { useQuery } from '@apollo/client'

import MySeriesUI from './mySeries.presenter'
import { FETCH_SERIES_BY_USER } from './mySeries.queries'
import { IQuery, IQueryFetchSeriesArgs } from '@/common/types/generated/types'
import { FETCH_USER_LOGGED_IN } from '@/common/layout/header/Header.queries'

export default function MySeries() {
  const { data } = useQuery<Pick<IQuery, 'fetchSeriesByUser'>, IQueryFetchSeriesArgs>(FETCH_SERIES_BY_USER)
  const { data: loginData } = useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN)
  return <MySeriesUI data={data} loginData={loginData} />
}
