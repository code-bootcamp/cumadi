import { gql } from '@apollo/client'

// **** 상품 조회
export const FETCH_POST = gql`
  query fetchPost($postId: ID!) {
    fetchPost(postId: $postId) {
      _id
      writer
      title
      subTitle
      contents
      tag
      category
      likeCount
      images
    }
  }
`
