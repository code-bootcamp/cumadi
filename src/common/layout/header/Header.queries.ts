import { gql } from '@apollo/client'

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      userId
      email
      nickname
      image
      introduction
    }
  }
`

export const LOGOUT_USER = gql`
  mutation {
    logoutUser
  }
`
