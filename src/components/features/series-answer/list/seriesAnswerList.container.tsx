import { useRouter } from 'next/router'
import SeriesAnswerListUI from './seriesAnswerList.presenter'
import { useQuery } from '@apollo/client'
import { FETCH_RATING_BY_SERIES, FETCH_SERIES_REVIEWS_BY_SERIES } from './seriesAnswerList.query'
import { useState } from 'react'

export default function SeriesAnswerList() {
  const router = useRouter()
  const seriesId = String(router.query.seriesId)

  const [isEditReview, setIsEditReview] = useState(false)

  const { data } = useQuery(FETCH_SERIES_REVIEWS_BY_SERIES, { variables: { seriesId }});
  // const { data: rate } = useQuery(FETCH_RATING_BY_SERIES, { variables: { seriesId }});

  const onClickUpdateReview = () => {
    setIsEditReview(prev => !prev)
  }

  return (
    <SeriesAnswerListUI
      data={data}
      isEditReview={isEditReview}
      setIsEditReview={setIsEditReview}
      onClickUpdateReview={onClickUpdateReview}
    />
  )
}
