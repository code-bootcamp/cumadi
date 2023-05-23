import { gql } from '@apollo/client'

// 전체 포스트들 조회
export const FETCH_POSTS = gql`
  query fetchPosts {
    fetchPosts {
      postId
      title
      content
      image
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
      createdAt
      likes {
        likeId
      }
      comments {
        commentId
      }
    }
  }
`
