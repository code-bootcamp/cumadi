import { useRouter } from 'next/router'
import { useState } from 'react'
import { Modal } from 'antd'
import { useMutation, useQuery } from '@apollo/client'

import SeriesAnswerListUI from './seriesAnswerList.presenter'
import { FETCH_RATING_BY_SERIES, FETCH_SERIES_REVIEWS_BY_SERIES } from './seriesAnswerList.query'
import { DELETE_SERIES_REVIEW } from './seriesAnswerList.query'
import {
  IMutation,
  IMutationDeleteSeriesReviewArgs,
  IQuery,
  IQueryFetchRatingBySeriesArgs,
  IQueryFetchSeriesReviewsBySeriesArgs,
} from '@/common/types/generated/types'
import { FETCH_USER_LOGGED_IN } from '../../series/detail/seriesDetail.query'

export default function SeriesAnswerList() {
  const router = useRouter()
  const seriesId = String(router.query.seriesId)

  const [isEditReview, setIsEditReview] = useState(false)

  const { data } = useQuery<Pick<IQuery, 'fetchSeriesReviewsBySeries'>, IQueryFetchSeriesReviewsBySeriesArgs>(
    FETCH_SERIES_REVIEWS_BY_SERIES,
    { variables: { seriesId } },
  )
  const { data: rate } = useQuery<Pick<IQuery, 'fetchRatingBySeries'>, IQueryFetchRatingBySeriesArgs>(
    FETCH_RATING_BY_SERIES,
    { variables: { seriesId } },
  )
  const [deleteReview] = useMutation<Pick<IMutation, 'deleteSeriesReview'>, IMutationDeleteSeriesReviewArgs>(
    DELETE_SERIES_REVIEW,
  )

  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN)

  const onClickUpdateReview = () => {
    setIsEditReview(prev => !prev)
  }
  const onClickDeleteReview = (reviewId: any) => async () => {
    if (!confirm('정말로 삭제하시겠습니까?')) return false
    try {
      await deleteReview({
        variables: {
          reviewId,
        },
        refetchQueries: [
          {
            query: FETCH_SERIES_REVIEWS_BY_SERIES,
            variables: { seriesId },
          },
        ],
      })
      Modal.success({ content: '댓글을 삭제했습니다!' })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return (
    <SeriesAnswerListUI
      rate={rate}
      data={data}
      loginData={loginData}
      isEditReview={isEditReview}
      setIsEditReview={setIsEditReview}
      onClickUpdateReview={onClickUpdateReview}
      onClickDeleteReview={onClickDeleteReview}
    />
  )
}
