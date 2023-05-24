import { gql } from '@apollo/client'

// 포스트 댓글 답변들 조회
export const FETCH_POST_COMMENT_ANSWERS = gql`
  query fetchPostCommentAnswers($postId: String!) {
    fetchPostCommentAnswers(postId: $postId) {
      answerId
      content
      comment {
        commentId
        content
      }
      answerAuthor {
        userId
        nickname
        image
      }
    }
  }
`

// 포스트 댓글 답변 조회
export const FETCH_POST_COMMENT_ANSWER = gql`
  query fetchPostCommentAnswer($commentId: String!) {
    fetchPostCommentAnswer(commentId: $commentId) {
      answerId
      content
      updatedAt
      comment {
        commentId
      }
      answerAuthor {
        userId
        nickname
        image
      }
    }
  }
`

// **** 포스트 댓글-답변 생성
export const CREATE_POST_COMMENT_ANSWER = gql`
  mutation createPostCommentAnswer($commentId: String!, $content: String!) {
    createPostCommentAnswer(commentId: $commentId, content: $content) {
      answerId
      content
      answerAuthor {
        userId
        nickname
        image
      }
    }
  }
`

// **** 포스트 댓글-답변 수정
export const UPDATE_POST_COMMENT_ANSWER = gql`
  mutation updatePostCommentAnswer($answerId: String!, $newContent: String!) {
    updatePostCommentAnswer(answerId: $answerId, newContent: $newContent) {
      answerId
      content
      answerAuthor {
        userId
        nickname
        image
      }
    }
  }
`
