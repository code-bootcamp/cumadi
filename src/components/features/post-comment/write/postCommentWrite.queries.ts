import { gql } from '@apollo/client'

// **** 포스트 댓글들 조회
export const FETCH_POST_COMMENTS = gql`
  query fetchPostComments($postId: String!) {
    fetchPostComments(postId: $postId) {
      commentId
      content
      updatedAt
      user {
        userId
        nickname
      }
    }
  }
`

// **** 포스트 댓글 작성
export const CREATE_POST_COMMENT = gql`
  mutation createPostComment($postId: String!, $content: String!) {
    createPostComment(postId: $postId, content: $content) {
      commentId
    }
  }
`

// **** 포스트 댓글 수정
export const UPDATE_POST_COMMENT = gql`
  mutation updatePostComment($commentId: String!, $updateContent: String!) {
    updatePostComment(commentId: $commentId, updateContent: $updateContent) {
      commentId
    }
  }
`
