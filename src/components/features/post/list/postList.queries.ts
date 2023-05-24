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
        image
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

// **** 포스트 좋아요 조회
export const FETCH_LIKE_COUNT_BY_POST = gql`
  query fetchLikeCountByPost($postId: String!) {
    fetchLikeCountByPost(postId: $postId)
  }
`
