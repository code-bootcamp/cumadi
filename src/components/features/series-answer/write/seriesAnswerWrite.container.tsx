import { useRouter } from 'next/router'
import SeriesAnswerWriteUI from './seriesAnswerWrite.presenter'
import { useMutation, useQuery } from '@apollo/client'
import {
  CREATE_SERIES_REVIEW,
  FETCH_SERIES_REVIEWS_BY_SERIES,
  FETCH_USER_LOGGED_IN,
  UPDATE_SERIES_REVIEW,
} from './seriesAnswerWrite.query'
import { useState } from 'react'
import { Modal } from 'antd'
import {
  IMutation,
  IMutationCreateSeriesReviewArgs,
  IMutationUpdateSeriesReviewArgs,
  IQuery,
  IUser,
} from '@/common/types/generated/types'

export default function SeriesAnswerWrite(props: any) {
  const router = useRouter()
  const seriesId = String(router.query.seriesId)

  const [content, setContent] = useState<string>('')
  const [rating, setRating] = useState<number>(1)

  const { data: user } = useQuery<Pick<IQuery, 'fetchUserLoggedIn'>, IUser>(FETCH_USER_LOGGED_IN)

  const [createSeriesReview] = useMutation<Pick<IMutation, 'createSeriesReview'>, IMutationCreateSeriesReviewArgs>(
    CREATE_SERIES_REVIEW,
  )
  const [updateSeriesReview] = useMutation<Pick<IMutation, 'updateSeriesReview'>, IMutationUpdateSeriesReviewArgs>(
    UPDATE_SERIES_REVIEW,
  )

  const onSubmitReview = async () => {
    try {
      await createSeriesReview({
        variables: {
          createSeriesReviewInput: {
            seriesId,
            rating,
            content,
          },
        },
        refetchQueries: [
          {
            query: FETCH_SERIES_REVIEWS_BY_SERIES,
            variables: { seriesId },
          },
        ],
      })
      Modal.success({ content: '리뷰가 등록되었습니다!' })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
    setContent('')
  }

  const onUpdateReview = async () => {
    if (!content) {
      alert('내용이 수정되지 않았습니다.')
      return
    }

    try {
      await updateSeriesReview({
        variables: {
          reviewId: props.reviewId,
          updateSeriesReviewInput: {
            content,
            rating,
          },
        },
        refetchQueries: [
          {
            query: FETCH_SERIES_REVIEWS_BY_SERIES,
            variables: { seriesId },
          },
        ],
      })
      Modal.success({ content: '리뷰가 수정되었습니다.' })
      props.setIsEditReview(false)
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  const onChangeContent = (event: any) => {
    setContent(event.target.value)
  }

  const onChangeRating = (value: any) => {
    setRating(value)
  }

  return (
    <SeriesAnswerWriteUI
      user={user}
      isEditReview={props.isEditReview}
      content={content}
      rating={rating}
      onChangeContent={onChangeContent}
      onChangeRating={onChangeRating}
      onSubmitReview={onSubmitReview}
      onUpdateReview={onUpdateReview}
    />
  )
}
