import { useQuery } from '@apollo/client'

import MySeriesUI from './mySeries.presenter'
import { FETCH_SERIES_BY_USER } from './mySeries.queries'
import { IQuery, IQueryFetchSeriesArgs } from '@/common/types/generated/types'

export default function MySeries() {
  const { data } = useQuery<Pick<IQuery, 'fetchSeriesByUser'>, IQueryFetchSeriesArgs>(FETCH_SERIES_BY_USER)

  return <MySeriesUI data={data} />
}
