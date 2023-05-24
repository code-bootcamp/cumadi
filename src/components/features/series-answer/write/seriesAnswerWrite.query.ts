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

export const CREATE_SERIES_REVIEW = gql`
  mutation createSeriesReview($createSeriesReviewInput: CreateSeriesReviewInput!) {
    createSeriesReview(createSeriesReviewInput: $createSeriesReviewInput) {
      reviewId
      content
      rating
      series {
        seriesId
      }
    }
  }
`

export const UPDATE_SERIES_REVIEW = gql`
  mutation updateSeriesReview($reviewId: String!, $updateSeriesReviewInput: UpdateSeriesReviewInput!) {
    updateSeriesReview(reviewId: $reviewId, updateSeriesReviewInput: $updateSeriesReviewInput) {
      reviewId
    }
  }
`

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      userId
      email
      nickname
    }
  }
`
