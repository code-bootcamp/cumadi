import { gql } from '@apollo/client'

export const FETCH_POSTS = gql`
  query fechPosts($page: Int) {
    fechPosts(page: $page) {
      _id
      writer
      contents
      tag
      category
      likeCount
      images
    }
  }
`
