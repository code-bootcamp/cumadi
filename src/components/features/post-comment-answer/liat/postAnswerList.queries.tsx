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
      }
    }
  }
`

// 포스트 댓글 답변 삭제
export const DELETE_POST_COMMENT_ANSWER = gql`
  mutation deletePostCommentAnswer($answerId: String!) {
    deletePostCommentAnswer(answerId: $answerId)
  }
`
