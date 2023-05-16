import { gql } from '@apollo/client'

// **** 시리즈의 모든 카테고리 조회
export const FETCH_SERIES_CATEGORIES = gql`
  query fetchSeriesCategories {
    fetchSeriesCategories {
      categoryId
      name
    }
  }
`
