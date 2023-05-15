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
    }
  }
`

export const FETCH_POST2 = gql`
  query fetchPost($postId: String!) {
    fetchPost(postId: $postId) {
      _id
      __typename
      pickedCount
    }
  }
`

// **** 포스트 삭제
export const DELETE_POST = gql`
  mutation deletePost($postId: String!) {
    deletePost(postId: $postId)
  }
`

// **** 포스트 좋아요
export const TOGGLE_POST_PICK = gql`
  mutation togglePostPick($postId: String!) {
    togglePostPick(postId: $postId)
  }
`

// **** 메모 저장
export const CREATE_POST_MEMO = gql`
  mutation createPostMemo($parse: String!) {
    createPostMemo(parse: $parse) {
      memoId
      parse
      createdAt
    }
  }
`
