import { useRouter } from 'next/router'
import SeriesAnswerListUI from './seriesAnswerList.presenter'
import { useQuery } from '@apollo/client'
import { FETCH_SERIES_REVIEWS_BY_SERIES } from './seriesAnswerList.query'

export default function SeriesAnswerList() {
  const router = useRouter()
  const seriesId = String(router.query.seriesId)

  const { data } = useQuery(FETCH_SERIES_REVIEWS_BY_SERIES, {
    variables: { seriesId }
  })

  return <SeriesAnswerListUI data={data} />
}
