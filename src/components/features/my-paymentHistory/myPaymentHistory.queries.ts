import { gql } from '@apollo/client'

export const FETCH_PAYMENT_DETAIL_BY_USER = gql`
  query fetchPaymentDetailByUser {
    fetchPaymentDetailByUser {
      paymentDetailId
      series {
        seriesId
        title
        price
        createdAt
      }
      user {
        userId
        email
        nickname
      }
    }
  }
`
