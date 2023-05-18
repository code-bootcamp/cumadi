import { gql } from '@apollo/client'

// **** 로그인한 유저정보 조회
export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      userId
      email
      nickname
    }
  }
`

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
        title
        introduction
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

// **** 포스트 좋아요 생성
export const TOGGLE_POST_PICK = gql`
  mutation togglePostPick($postId: String!) {
    togglePostPick(postId: $postId)
  }
`

// **** 포스트 좋아요 조회
export const FETCH_LIKE_COUNT_BY_POST = gql`
  query fetchLikeCountByPost($postId: String!) {
    fetchLikeCountByPost(postId: $postId)
  }
`

// **** 메모 저장
export const CREATE_POST_MEMO = gql`
  mutation createPostMemo($postId: String!, $parse: String!) {
    createPostMemo(postId: $postId, parse: $parse) {
      memoId
      parse
      createdAt
    }
  }
`
