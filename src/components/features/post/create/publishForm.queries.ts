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
