// **** restoreAccessToken 나중에 사용할 예정
// import { gql, GraphQLClient } from 'graphql-request'

// const RESTORE_ACCESS_TOKEN = gql`
//   mutation restoreAccessToken {
//     restoreAccessToken
//   }
// `

// export const getAccessToken = async (): Promise<string | undefined> => {
//   try {
//     const graphQLClient = new GraphQLClient('http://34.64.43.6:3000/graphql', { credentials: 'include' })
//     const result = await graphQLClient.request<any>(RESTORE_ACCESS_TOKEN)
//     const newAccessToken = result.restoreAccessToken
//     return newAccessToken
//   } catch (error) {
//     if (error instanceof Error) console.log(error.message)
//   }
// }
