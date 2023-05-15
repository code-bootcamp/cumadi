import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Modal } from 'antd'

export const useAuth = () => {
  const router = useRouter()
  useEffect(() => {
    // NOTE: localStorage에 저장할 시 accessToken : data.loginUser.... 의 string 형태로 저장해주시면 좋을 것 같습니다
    if (!localStorage.getItem('accessToken')) {
      Modal.error({ content: '로그인이 필요합니다' })
      router.push('/login')
    }
  }, [])
}
