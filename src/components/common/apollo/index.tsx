import { useEffect } from 'react'
import { useRecoilState, useRecoilValueLoadable } from 'recoil'
import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink, fromPromise } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { createUploadLink } from 'apollo-upload-client'
import { accessTokenState, restoreAccessTokenLoadable } from '@/common/store'
import { getAccessToken } from '@/common/libraries/getAccessToken'
import { IApolloSettingProps } from './apollo.types'

const GLOBAL_STATE = new InMemoryCache()

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable)

  useEffect(() => {
    void restoreAccessToken.toPromise().then(newAccessToken => {
      setAccessToken(newAccessToken ?? '')
    })
  }, [])

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐치
    if (typeof graphQLErrors !== 'undefined') {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === 'UNAUTHENTICATED') {
          return fromPromise(
            // 2. refreshToken으로 accessToken을 재발급 받기
            getAccessToken().then(newAccessToken => {
              setAccessToken(newAccessToken ?? '')

              // 3. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken}`, // 3-2. 토큰만 새걸로 바꿔치기
                },
              })
            }),
          ).flatMap(() => forward(operation)) // 3-3. 방금 수정한 쿼리 재요청하기
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
