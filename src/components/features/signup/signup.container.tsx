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
    const regex = /^\w+@\w+\.[a-zA-Z]{2,10}$/
    if (event.target.value && !regex.test(event.target.value)) setEmailError('올바른 이메일 형식이 아닙니다.')
    else setEmailError('')
  }

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
    const regex = /^[ㄱ-ㅎ가-힣A-Za-z\d]{2,10}$/
    if (event.target.value && !regex.test(event.target.value)) setNameError('닉네임은 비어있을 수 없어요!(2~10글자)')
    else setNameError('')
  }

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,16}$/
    if (event.target.value && !regex.test(event.target.value))
      setPasswordError('영문+숫자+특수문자 조합 8~16자리의 비밀번호를 입력해 주세요.')
    else setPasswordError('')

    if (checkPassword && checkPassword !== event.target.value) setCheckPasswordError('비밀번호가 일치하지 않습니다.')
    else setCheckPasswordError('')
  }

  const onChangeCheckPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckPassword(event.target.value)

    if (event.target.value && password !== event.target.value) setCheckPasswordError('비밀번호가 일치하지 않습니다.')
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
