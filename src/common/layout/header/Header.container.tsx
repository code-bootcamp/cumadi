import { Modal } from 'antd'
import { useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { useApolloClient, useMutation, useQuery } from '@apollo/client'
import { throttle } from 'lodash'

import LayoutHeaderUI from './Header.presenter'
import { FETCH_USER_LOGGED_IN, LOGOUT_USER } from './Header.queries'
import { accessTokenState } from '@/common/store'

export default function LayoutHeader() {
  const router = useRouter()
  const beforeScrollY = useRef(0) // 맨위 헤더 0부터 시작

  // **** 상태
  const [isVisible, setIsVisible] = useState(true)
  const [, setAccessToken] = useRecoilState(accessTokenState)
  const client = useApolloClient()

  // **** playground
  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN)
  const [logout] = useMutation(LOGOUT_USER)

  // **** logout
  const onClickLogout = async () => {
    try {
      const result = await logout()

      if (result.data.logoutUser) {
        Modal.success({ content: '로그아웃되었습니다.' })

        // **** 토큰, 캐시 초기화
        setAccessToken('')
        client.clearStore()
        void router.push('/login')
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  // **** 스크롤을 위로 올리면 visible는 true, 내리면 false로
  // throttle : 함수가 한 번 호출되면 지정된 시간 안에 여러번 실행되지 않도록 해줌
  const handleScroll = useMemo(
    () =>
      throttle(() => {
        const currentScrollY = window.scrollY
        if (beforeScrollY.current < currentScrollY) setIsVisible(false)
        else setIsVisible(true)
        beforeScrollY.current = currentScrollY
      }, 250),
    [beforeScrollY],
  )

  return (
    <LayoutHeaderUI
      loginData={loginData}
      isVisible={isVisible}
      onClickLogout={onClickLogout}
      handleScroll={handleScroll}
    />
  )
}
