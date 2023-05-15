import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Modal } from 'antd'
import { useRecoilState } from 'recoil'
import { checkLoginState } from '../store'

export const useAuth = () => {
  const router = useRouter()
  const [checkLogin, setCheckLogin] = useRecoilState(checkLoginState)
  useEffect((): any => {
    if (!localStorage.getItem('accessToken')) {
      setCheckLogin(false)
      Modal.error({ content: '로그인이 필요합니다' })
      router.push('/login')
    } else setCheckLogin(true)
  }, [])
}
