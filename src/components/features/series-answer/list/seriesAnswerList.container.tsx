import { useRouter } from 'next/router'
import SeriesAnswerListUI from './seriesAnswerList.presenter'
import { useMutation, useQuery } from '@apollo/client'
import { FETCH_RATING_BY_SERIES, FETCH_SERIES_REVIEWS_BY_SERIES } from './seriesAnswerList.query'
import { useState } from 'react'
import { DELETE_SERIES_REVIEW } from './seriesAnswerList.query'
import { Modal } from 'antd'

export default function SeriesAnswerList() {
  const router = useRouter()
  const seriesId = String(router.query.seriesId)

  const [isEditReview, setIsEditReview] = useState(false)

  const { data } = useQuery(FETCH_SERIES_REVIEWS_BY_SERIES, { variables: { seriesId } })
  // const { data: rate } = useQuery(FETCH_RATING_BY_SERIES, { variables: { seriesId }});
  const [deleteReview] = useMutation(DELETE_SERIES_REVIEW, { variables: {} })

  const onClickUpdateReview = () => {
    setIsEditReview(prev => !prev)
  }

  const onClickDeleteReview = reviewId => async () => {
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
      data={data}
      isEditReview={isEditReview}
      setIsEditReview={setIsEditReview}
      onClickUpdateReview={onClickUpdateReview}
      onClickDeleteReview={onClickDeleteReview}
    />
  )
}
