import { useState, ChangeEvent } from 'react'
import { Modal } from 'antd'
import { useMutation } from '@apollo/client'
import { CREATE_USER } from './signup.queries'
import { useRouter } from 'next/router'
import SignUpUI from './signup.presenter'

export default function SignUp() {
  const router = useRouter()

  // **** 상태
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')

  // **** 유효성 검사
  const [emailError, setEmailError] = useState('')
  const [nameError, setNameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [checkPasswordError, setCheckPasswordError] = useState('')

  // **** Playground
  // const [createUser] = useMutation<Pick<IMutation, 'createUser'>, IMutationCreateUserArgs>(CREATE_USER)

  // **** 값이 있다면, 유효성 검사 메시지 지우기
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    if (!/^\w+@\w+\.[a-zA-Z]{2,10}$/.test(event.target.value)) setEmailError('이메일은 필수 입력입니다.')
    else setEmailError('')
  }

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
    if (!/^[ㄱ-ㅎ가-힣]{1,10}$/.test(event.target.value)) setNameError('이름은 필수 입력입니다.(2~10글자)')
    else setNameError('')
  }

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    if (!/^\w[a-zA-Z0-9]{7,16}$/.test(event.target.value))
      setPasswordError('비밀번호는 필수 입력입니다.(문자, 숫자, 최소 8글자~최대16글자)')
    else setPasswordError('')
  }

  const onChangeCheckPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckPassword(event.target.value)
    if (!/^\w[a-zA-Z0-9]{7,16}$/.test(event.target.value)) setCheckPasswordError('비밀번호는 필수 입력입니다.')
    else setCheckPasswordError('')
  }

  // **** 회원가입
  const onClickSignUp = async () => {
    // if (password !== checkPassword) {
    //   setPasswordError('비밀번호가 다릅니다.')
    //   setCheckPasswordError('비밀번호가 다릅니다.')
    // } else {
    //   setPasswordError('')
    // }
    // try {
    //   await createUser({
    //     variables: {
    //       createUserInput: {
    //         email,
    //         name,
    //         password,
    //       },
    //     },
    //   })
    //   Modal.success({ content: '회원가입이 되었습니다.' })
    //   void router.push('/login')
    // } catch (error) {
    //   if (error instanceof Error) Modal.error({ content: error.message })
    // }
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
