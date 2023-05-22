import { useState } from 'react'
import type { ChangeEvent } from 'react'
import { useRouter } from 'next/router'
import { Modal } from 'antd'
import { useRecoilState } from 'recoil'

import LoginUI from './login.presenter'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from './login.queries'
import { accessTokenState } from '@/common/store'
import { IMutation, IMutationLoginUserArgs } from '@/common/types/generated/types'

export default function Login() {
  const router = useRouter()
  // **** 상태
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [, setAccessToken] = useRecoilState<string>(accessTokenState)

  // ** 유효성 검사
  const [emailError, setEmailError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')

  // **** PlayGround
  const [loginUser] = useMutation<Pick<IMutation, 'loginUser'>, IMutationLoginUserArgs>(LOGIN_USER)

  // **** 값이 있다면, 유효성 검사 메시지 지우기
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    const regex = /^\w+@\w+\.[a-zA-Z]{2,3}$/
    if (event.target.value && !regex.test(event.target.value)) setEmailError('올바른 이메일 형식이 아닙니다.')
    else setEmailError('')
  }

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,16}$/
    if (event.target.value && !regex.test(event.target.value))
      setPasswordError('영문+숫자+특수문자 조합 8~16자리의 비밀번호를 입력해 주세요.')
    else setPasswordError('')
  }

  // **** 로그인 요청
  const onClickLogin = async () => {
    try {
      // 1. 로그인해서 accessToken 받아오기
      const result = await loginUser({
        variables: {
          password,
          email,
        },
      })

      const accessToken = result.data?.loginUser

      // 2. accessToken을 globalState에 저장하기
      if (!accessToken) {
        Modal.error({ content: '로그인에 실패했습니다. 다시 시도해주세요.' })
        return
      }
      setAccessToken(accessToken)
      localStorage.setItem('accessToken', accessToken) // localstorage 나중에 지울 예정

      // 3. 로그인 성공 페이지로 이동하기
      Modal.success({ content: '로그인 되었습니다' })
      void router.push('/')
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return (
    <LoginUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogIn={onClickLogin}
      emailError={emailError}
      passwordError={passwordError}
    />
  )
}
