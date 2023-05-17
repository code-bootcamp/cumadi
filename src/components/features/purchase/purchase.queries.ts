import { gql } from '@apollo/client'

export const CREATE_PAYMENT_SERIES = gql`
  mutation createPaymentSeries($createPaymentInput: CreatePaymentInput!) {
    createPaymentSeries(createPaymentInput: $createPaymentInput) {
      paymentId
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
