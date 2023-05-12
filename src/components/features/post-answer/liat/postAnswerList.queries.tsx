import { gql } from '@apollo/client'

// 포스트 질문-답변 댓글들 조회
export const FETCH_POST_QUESTION_ANSWERS = gql`
  query fetchPostQuestionAnswers($postQuestionId: ID!) {
    fetchPostQuestionAnswers(postQuestionId: $postQuestionId) {
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

// 포스트 질문-답변 댓글 삭제
export const DELETE_POST_ANSWER = gql`
  mutation deletePostQuestionAnswer($postQuestionAnswerId: ID!) {
    deletePostQuestionAnswer(postQuestionAnswerId: $postQuestionAnswerId)
  }
`
