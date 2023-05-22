import { gql } from "@apollo/client"

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      userId
      email
      nickname
    }
  }
`

export const FETCH_SERIES = gql`
  query fetchSeries($seriesId: String!) {
    fetchSeries(seriesId: $seriesId) {
      seriesId
      title
      introduction
      price
      createdAt
      updatedAt
      category {
        categoryId
        name
      }
      user {
        userId
        nickname
      }
      post {
        postId
        title
        content
        image
        description
        createdAt
        user{
          userId
          email
          nickname
        }
      }
    }
  }
`

export const DELETE_SERIES = gql`
  mutation deleteSeries($seriesId: String!) {
    deleteSeries(seriesId: $seriesId)
  }
`

export const INSERT_SERIES_IN_CART = gql`
  mutation insertSeriesInCart($seriesId: String!) {
    insertSeriesInCart(seriesId: $seriesId) {
      seriesId
    }
  }
`