import { gql } from '@apollo/client'

export const CREATE_PAYMENT_SERIES = gql`
  mutation createPaymentSeries($createPaymentInput: CreatePaymentInput!) {
    createPaymentSeries(createPaymentInput: $createPaymentInput) {
      paymentId
    }
  }
`

export const CREATE_PAYMENT_FREE_SERIES = gql`
  mutation createPaymentFreeSeries($seriesList: [String!]!) {
    createPaymentFreeSeries(seriesList: $seriesList) {
      paymentId
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

export const FETCH_SERIES = gql`
  query fetchSeries($seriesId: String!) {
    fetchSeries(seriesId: $seriesId) {
      seriesId
      title
      introduction
      image
      price
      paid
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
