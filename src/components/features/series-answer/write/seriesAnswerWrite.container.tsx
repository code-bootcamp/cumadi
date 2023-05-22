import { useRouter } from 'next/router'
import SeriesAnswerWriteUI from './seriesAnswerWrite.presenter'
import { useMutation } from '@apollo/client'
import { CREATE_SERIES_REVIEW, FETCH_SERIES_REVIEWS_BY_SERIES, UPDATE_SERIES_REVIEW } from './seriesAnswerWrite.query'
import { useState } from 'react'
import { Modal } from 'antd'

export default function SeriesAnswerWrite() {
  const router = useRouter()
  const seriesId = String(router.query.seriesId)

  const [content, setContent] = useState("")

  const [createSeriesReview] = useMutation(CREATE_SERIES_REVIEW)
  const [updateSeriesReview] = useMutation(UPDATE_SERIES_REVIEW)

  const onSubmitReview = async () => {
    try {
      await createSeriesReview({
        variables: {
          createSeriesReviewInput: {
            seriesId,
            // rating,
            content,
          },
          refetchQueries: [
            {
              query: FETCH_SERIES_REVIEWS_BY_SERIES,
              variables: { seriesId },
            },
          ],
        }
      })
      Modal.success({ content: '리뷰가 등록되었습니다!' })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
    setContent("")
  }

  return <SeriesAnswerWriteUI />
}
