import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink, fromPromise } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { createUploadLink } from 'apollo-upload-client'
import { accessTokenState } from '@/common/store'
import { getAccessToken } from '@/common/libraries/getAccessToken'

import { IApolloSettingProps } from './apollo.types'

const GLOBAL_STATE = new InMemoryCache()

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)

  useEffect(() => {
    void getAccessToken().then(newAccessToken => {
      if (newAccessToken) setAccessToken(newAccessToken)
    })
  }, [])

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === 'UNAUTHENTICATED') {
          return fromPromise(
            getAccessToken().then(newAccessToken => {
              if (newAccessToken) setAccessToken(newAccessToken)

              if (typeof newAccessToken !== 'string') return
              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken}`,
                },
              })
            }),
          ).flatMap(() => forward(operation))
        }
      }
    }
  })

  const uploadLink = createUploadLink({
    uri: 'http://34.64.43.6:3000/graphql',
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: 'include',
  })

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: GLOBAL_STATE,
    connectToDevTools: true,
  })

  return (
    // prettier-ignore
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}
