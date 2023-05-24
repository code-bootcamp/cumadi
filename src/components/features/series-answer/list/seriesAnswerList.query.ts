import { gql } from '@apollo/client'

export const FETCH_SERIES_REVIEWS_BY_SERIES = gql`
  query fetchSeriesReviewsBySeries($seriesId: String!) {
    fetchSeriesReviewsBySeries(seriesId: $seriesId) {
      reviewId
      content
      rating
      series {
        seriesId
      }
      user {
        userId
        email
        nickname
      }
    }
  }
`

export const FETCH_RATING_BY_SERIES = gql`
  query fetchRatingBySeries($seriesId: String!) {
    fetchRatingBySeries(seriesId: $seriesId)
  }
`

export const DELETE_SERIES_REVIEW = gql`
  mutation deleteSeriesReview($reviewId: String!) {
    deleteSeriesReview(reviewId: $reviewId)
  }
`
