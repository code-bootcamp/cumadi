import { gql } from "@apollo/client";

export const FETCH_SERIES_ALL = gql`
  query fetchSeriesAll {
    fetchSeriesAll {
      seriesId
      title
      introduction
      image
      price
      createdAt
      category{
        categoryId
        name
      }
      user{
        userId
        nickname
      }
    }
  }
`

export const FETCH_SERIES_CATEGORIES = gql`
  query fetchSeriesCategories {
    fetchSeriesCategories {
      categoryId
      name
    }
  }
`
