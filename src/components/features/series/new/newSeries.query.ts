import { gql } from "@apollo/client";

export const FETCH_POSTS_OF_MINE = gql`
    query fetchPostsOfMine {
        fetchPostsOfMine {
            postId
            title
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