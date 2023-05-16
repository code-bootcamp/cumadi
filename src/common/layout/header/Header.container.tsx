import React from 'react'
import LayoutHeaderUI from './Header.presenter'
import { FETCH_USER_LOGGED_IN, LOGOUT_USER } from './Header.queries'
import { useApolloClient, useMutation, useQuery } from '@apollo/client'
import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { accessTokenState } from '@/common/store'

export default function LayoutHeader() {
  const router = useRouter()

  // **** 상태
  const [, setAccessToken] = useRecoilState(accessTokenState)
  const client = useApolloClient()

  // **** playground
  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN)
  const [logout] = useMutation(LOGOUT_USER)

  // **** logout
  const onClickLogout = async () => {
    try {
      // **** 토큰, 캐시 초기화
      setAccessToken('')
      client.clearStore()

      const result = await logout()
      console.log(result)

      Modal.success({ content: '로그아웃되었습니다.' })
      void router.push('/login')
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }
  return <LayoutHeaderUI loginData={loginData} onClickLogout={onClickLogout} />
}
