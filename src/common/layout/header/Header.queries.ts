import { gql } from '@apollo/client'

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      userId
      email
      nickname
    }
  }
`

export const LOGOUT_USER = gql`
  mutation {
    logoutUser
  }
`
