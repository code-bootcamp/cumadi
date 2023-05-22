import React from 'react'
import { useQuery } from '@apollo/client'

import MyPageUI from './myPage.presenter'
import { FETCH_USER_LOGGED_IN } from '@/common/layout/header/Header.queries'

export default function MyPage() {
  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN)
  return <MyPageUI loginData={loginData} />
}
