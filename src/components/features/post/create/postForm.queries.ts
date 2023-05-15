import { gql } from '@apollo/client'

export const CREATE_POST = gql`
  mutation createPost($createPostInput: CreatePostInput!) {
    createPost(createPostInput: $createPostInput) {
      postId
      title
      content
    }
  }
`
