import { gql } from '@apollo/client'

export const FETCH_SERIES_BY_USER = gql`
  query fetchSeriesByUser {
    fetchSeriesByUser {
      seriesId
      title
      introduction
      image
      price
      paid
      createdAt
      category {
        categoryId
        name
      }
      user {
        userId
        nickname
        image
        introduction
      }
    }
  }
`
