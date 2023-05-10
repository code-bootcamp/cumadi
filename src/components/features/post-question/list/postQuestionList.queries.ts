import { gql } from '@apollo/client'

// 포스트 질문 댓글들 조회
export const FETCH_POST_QUESTIONS = gql`
  query fetchPostQuestions($postId: ID!) {
    fetchPostQuestions(postId: $postId) {
      _id
      contents
      createdAt
      user {
        _id
        name
        picture
      }
    }
  }
`

// 포스트 질문 댓글 삭제
export const DELETE_POST_QUESTION = gql`
  mutation deletePostQuestion($postQuestionId: ID!) {
    deletePostQuestion(postQuestionId: $postQuestionId)
  }
`
