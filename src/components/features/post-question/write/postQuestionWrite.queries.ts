import { gql } from '@apollo/client'

// **** 포스트 질문 댓글들 조회
export const FETCH_POST_QUESTIONS = gql`
  query fetchPostQuestions($postId: ID!, $page: Int) {
    fetchPostQuestions(postId: $postId, page: $page) {
      _id
      contents
      createdAt
      user {
        _id
        email
        name
        picture
        createdAt
      }
    }
  }
`

// **** 포스트 질문 댓글 작성
export const CREATE_POST_QUESTION = gql`
  mutation createPostQuestion($createPostQuestionInput: CreatePostQuestionInput!, $postId: ID!) {
    createPostQuestion(createPostQuestionInput: $createPostQuestionInput, postId: $postId) {
      _id
      contents
      createdAt
      user {
        _id
        email
        name
        picture
      }
    }
  }
`

// **** 포스트 질문 댓글 수정
export const UPDATE_POST_QUESTION = gql`
  mutation updatePostQuestion($updatePostQuestionInput: UpdatePostQuestionInput!, $postQuestionId: ID!) {
    updatePostQuestion(updatePostQuestionInput: $updatePostQuestionInput, postQuestionId: $postQuestionId) {
      _id
      contents
      createdAt
      user {
        _id
        email
        name
        picture
      }
    }
  }
`
