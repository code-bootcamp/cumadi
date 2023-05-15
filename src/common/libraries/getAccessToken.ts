import { gql, GraphQLClient } from 'graphql-request'

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken
  }
`

export const getAccessToken = async () => {
  try {
    const graphQLClient = new GraphQLClient('http://34.64.43.6:3000/graphql', {
      credentials: 'include',
    })
    const result = (await graphQLClient.request(RESTORE_ACCESS_TOKEN)) as any
    const newAccessToken: string = result.restoreAccessToken
    return newAccessToken
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
  }
}
