import { gql } from '@apollo/client'

// **** 포스트 조회
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

export const FETCH_POST2 = gql`
  query fetchPost($postId: ID!) {
    fetchPost(postId: $postId) {
      _id
      __typename
      pickedCount
    }
  }
`

// **** 포스트 삭제
export const DELETE_POST = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`

// **** 포스트 좋아요
export const TOGGLE_POST_PICK = gql`
  mutation togglePostPick($postId: ID!) {
    togglePostPick(postId: $postId)
  }
`
