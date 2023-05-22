import { useState, ChangeEvent } from 'react'
import { Modal } from 'antd'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'

import { CREATE_USER } from './signup.queries'
import SignUpUI from './signup.presenter'
import { IMutation, IMutationCreateUserArgs } from '@/common/types/generated/types'

export default function SignUp() {
  const router = useRouter()

  // **** 상태
  const [email, setEmail] = useState<string>('')
  const [nickname, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [checkPassword, setCheckPassword] = useState<string>('')

  // **** 유효성 검사
  const [emailError, setEmailError] = useState<string>('')
  const [nameError, setNameError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')
  const [checkPasswordError, setCheckPasswordError] = useState<string>('')

  // **** Playground
  const [createUser] = useMutation<Pick<IMutation, 'createUser'>, IMutationCreateUserArgs>(CREATE_USER)

  // **** 값이 있다면, 유효성 검사 메시지 지우기
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    const regex = /^\w+@\w+\.[a-zA-Z]{2,10}$/
    if (event.target.value && !regex.test(event.target.value)) setEmailError('올바른 이메일 형식이 아닙니다.')
    else setEmailError('')
  }

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
    const regex = /^[ㄱ-ㅎ가-힣A-Za-z\d]{2,10}$/
    if (!regex.test(event.target.value)) setNameError('올바른 닉네임이 아닙니다.(2~10글자)')
    else setNameError('')
  }

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,16}$/
    if (event.target.value && !regex.test(event.target.value))
      setPasswordError('영문+숫자+특수문자 조합 8~16자리의 비밀번호를 입력해 주세요.')
    else setPasswordError('')

    if (checkPassword !== event.target.value) setCheckPasswordError('비밀번호가 일치하지 않습니다.')
    else setCheckPasswordError('')
  }

  const onChangeCheckPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckPassword(event.target.value)

    if (password !== event.target.value) setCheckPasswordError('비밀번호가 일치하지 않습니다.')
    else setCheckPasswordError('')
  }

  // **** 회원가입
  const onClickSignUp = async () => {
    try {
      if (
        email &&
        nickname &&
        password &&
        checkPassword &&
        !emailError &&
        !nameError &&
        !passwordError &&
        !checkPasswordError
      ) {
        await createUser({
          variables: {
            createUserInput: {
              email,
              nickname,
              password,
            },
          },
        })

        Modal.success({ content: '회원가입이 되었습니다.' })
        void router.push('/login')
      } else {
        const emailRegex = /^\w+@\w+\.[a-zA-Z]{2,10}$/
        const nicknameRegex = /^[ㄱ-ㅎ가-힣A-Za-z\d]{2,10}$/
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,16}$/

        if (!emailRegex.test(email)) setEmailError('올바른 이메일 형식이 아닙니다.')

        if (!nicknameRegex.test(nickname)) setNameError('올바른 닉네임이 아닙니다.(2~10글자)')

        if (!passwordRegex.test(password))
          setPasswordError('영문+숫자+특수문자 조합 8~16자리의 비밀번호를 입력해 주세요.')

        if (!passwordRegex.test(checkPassword))
          setCheckPasswordError('영문+숫자+특수문자 조합 8~16자리의 비밀번호를 입력해 주세요.')

        if (password !== checkPassword) setCheckPasswordError('비밀번호가 일치하지 않습니다.')
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return (
    <SignUpUI
      onChangeEmail={onChangeEmail}
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onChangeCheckPassword={onChangeCheckPassword}
      onClickSignUp={onClickSignUp}
      emailError={emailError}
      nameError={nameError}
      passwordError={passwordError}
      password1Error={checkPasswordError}
    />
  )
}
