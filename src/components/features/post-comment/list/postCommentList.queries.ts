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

// 포스트 질문 댓글 삭제
export const DELETE_POST_QUESTION = gql`
  mutation deletePostComment($commentId: String!) {
    deletePostComment(commentId: $commentId)
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
