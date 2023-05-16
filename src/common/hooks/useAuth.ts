import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Modal } from 'antd'
import { useRecoilValueLoadable } from 'recoil'
import { restoreAccessTokenLoadable } from '../store'

export const useAuth = () => {
  const router = useRouter()

  const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable)

  useEffect(() => {
    void restoreAccessToken.toPromise().then(newAccessToken => {
      if (newAccessToken === undefined) {
        Modal.error({ content: '로그인이 필요합니다' })
        router.push('/login')
      }
    })
  }, [])
}
