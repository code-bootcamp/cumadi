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

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      userId
      email
      nickname
    }
  }
`
