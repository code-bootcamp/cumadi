import { gql } from '@apollo/client'

// **** 포스트 질문-답변 댓글들 조회
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

// **** 포스트 질문-답변 댓글 생성
export const CREATE_POST_QUESTION_ANSWER = gql`
  mutation createPostQuestionAnswer(
    $createPostQuestionAnswerInput: CreatePostQuestionAnswerInput!
    $postQuestionId: ID!
  ) {
    createPostQuestionAnswer(
      createPostQuestionAnswerInput: $createPostQuestionAnswerInput
      postQuestionId: $postQuestionId
    ) {
      _id
      contents
    }
  }
`

// **** 포스트 질문-답변 댓글 수정
export const UPDATE_POST_QUESTION_ANSWER = gql`
  mutation updateUseditemQuestionAnswer(
    $updatePostQuestionAnswerInput: UpdatePostQuestionAnswerInput!
    $postQuestionAnswerId: ID!
  ) {
    updatePostQuestionAnswer(
      updatePostQuestionAnswerInput: $updatePostQuestionAnswerInput
      postQuestionAnswerId: $postQuestionAnswerId
    ) {
      _id
      contents
      createdAt
    }
  }
`
