import { gql } from '@apollo/client'

// **** 포스트 조회
export const FETCH_POST = gql`
  query fetchPost($postId: String!) {
    fetchPost(postId: $postId) {
      postId
      title
      content
      user {
        userId
        nickname
      }
      tags {
        tagId
        name
      }
      series {
        seriesId
        title
        introduction
      }
      createdAt
    }
  }
`
