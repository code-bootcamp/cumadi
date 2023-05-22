import React, { useState } from 'react'
import { useApolloClient, useMutation, useQuery } from '@apollo/client'

import MyPageUI from './myPage.presenter'
import { FETCH_USER_LOGGED_IN } from '@/common/layout/header/Header.queries'
import { RESIGN_USER } from './myPage.queries'
import { IMutation } from '@/common/types/generated/types'
import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { accessTokenState } from '@/common/store'

export default function MyPage() {
  const router = useRouter()

  // **** 상태
  const [open, setOpen] = useState(false)
  const [, setAccessToken] = useRecoilState(accessTokenState)
  const client = useApolloClient()

  // **** PlayGround
  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN)
  const [resignUser] = useMutation<Pick<IMutation, 'resignUser'>>(RESIGN_USER)

  const showModal = () => setOpen(true)

  const onCancel = () => setOpen(false)

  const onClickResignUser = async () => {
    try {
      await resignUser()

      // **** 토큰, 캐시 초기화
      setAccessToken('')
      client.clearStore()
      void router.push('/')
      setOpen(false)
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return (
    <MyPageUI
      loginData={loginData}
      open={open}
      showModal={showModal}
      onCancel={onCancel}
      onClickResignUser={onClickResignUser}
    />
  )
}
