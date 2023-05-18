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
