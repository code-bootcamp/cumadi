import { gql } from '@apollo/client'

export const FETCH_SERIES_BY_USER = gql`
  query fetchSeriesByUser {
    fetchSeriesByUser {
      seriesId
      title
    }
  }
`

export const UPLOAD_IMAGE = gql`
  mutation uploadImage($file: Upload!) {
    uploadImage(file: $file)
  }
`
export const FETCH_POST = gql`
  query fetchPost($postId: String!) {
    fetchPost(postId: $postId) {
      postId
      title
      content
      image
      description
      user {
        userId
        nickname
      }
      tags {
        tagId
        name
      }
      series {
        seriesId
        title
        introduction
      }
      createdAt
    }
  }
`
