import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Modal } from 'antd'
import { useRecoilState, useRecoilValueLoadable } from 'recoil'
import { checkLoginState, restoreAccessTokenLoadable } from '../store'

export const useAuth = () => {
  const router = useRouter()
  const [, setCheckLogin] = useRecoilState(checkLoginState)
  const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable)

  useEffect(() => {
    void restoreAccessToken.toPromise().then(newAccessToken => {
      if (newAccessToken === undefined) {
        setCheckLogin(false)
        Modal.error({ content: '로그인이 필요합니다' })
        router.push('/login')
      } else setCheckLogin(true)
    })
  }, [])
}
