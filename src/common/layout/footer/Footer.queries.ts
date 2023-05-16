import { gql } from '@apollo/client'

// 전체 포스트들 조회
export const FETCH_POSTS = gql`
  query fetchPosts {
    fetchPosts {
      postId
      title
      content
      series {
        seriesId
        title
      }
      tags {
        name
      }
      user {
        nickname
      }
    }
  }
`
