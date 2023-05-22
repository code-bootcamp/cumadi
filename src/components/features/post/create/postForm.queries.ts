import { gql } from '@apollo/client'

export const CREATE_POST = gql`
  mutation createPost($createPostInput: CreatePostInput!) {
    createPost(createPostInput: $createPostInput) {
      postId
      title
      content
      image
      description
      series {
        seriesId
        title
      }
      tags {
        tagId
        name
      }
    }
  }
`

export const UPDATE_POST = gql`
  mutation updatePost($postId: String!, $updatePostInput: UpdatePostInput!) {
    updatePost(postId: $postId, updatePostInput: $updatePostInput) {
      postId
      title
      content
      image
      description
      series {
        seriesId
        title
      }
      tags {
        tagId
        name
      }
    }
  }
`
