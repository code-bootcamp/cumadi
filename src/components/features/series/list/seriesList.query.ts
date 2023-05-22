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

export const FETCH_SERIES_BY_CATEGORY = gql`
  query fetchSeriesByCategory($categoryId: String!) {
    fetchSeriesByCategory(categoryId: $categoryId) {
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
