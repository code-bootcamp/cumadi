import { gql } from '@apollo/client'

export const UPDATE_USER_PASSWORD = gql`
  mutation updateUserPassword($currentPassword: String!, $newPassword: String!) {
    updateUserPassword(currentPassword: $currentPassword, newPassword: $newPassword)
  }
`

export const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      userId
      email
      nickname
      introduction
      image
    }
  }
`

export const UPLOAD_IMAGE = gql`
  mutation uploadImage($file: Upload!) {
    uploadImage(file: $file)
  }
`
