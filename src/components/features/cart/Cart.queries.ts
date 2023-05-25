import { gql } from '@apollo/client'

export const FETCH_SHOPPING_CART = gql`
  query fetchShoppingCart {
    fetchShoppingCart {
      seriesId
      title
      image
      price
      createdAt
      user {
        userId
        email
        nickname
      }
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

export const CHECK_PAYMENT_LIST = gql`
  mutation checkPaymentList($seriesId: [String!]!) {
    checkPaymentList(seriesId: $seriesId) {
      status
    }
  }
`

export const DELETE_SERIES_IN_CART = gql`
  mutation deleteSeriesInCart($seriesId: String!) {
    deleteSeriesInCart(seriesId: $seriesId)
  }
`

export const CREATE_PAYMENT_FREE_SERIES = gql`
  mutation createPaymentFreeSeries($seriesList: [String!]!) {
    createPaymentFreeSeries(seriesList: $seriesList) {
      paymentId
    }
  }
`

export const CREATE_PAYMENT_SERIES = gql`
  mutation createPaymentSeries($createPaymentInput: CreatePaymentInput!) {
    createPaymentSeries(createPaymentInput: $createPaymentInput) {
      paymentId
    }
  }
`
