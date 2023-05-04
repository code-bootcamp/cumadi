import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'

export default function LoginSignUpPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [retypedPassword, setRetypedPassword] = useState('')
  const [name, setName] = useState('')

  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [retypedPasswordError, setRetypedPasswordError] = useState('')
  const [nameError, setNameError] = useState('')

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    if (event.target.value.includes('@') === false) {
      setEmailError('이메일 아이디를 @까지 정확하게 입력하세요.')
    } else {
      setEmailError('')
    }
  }

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,16}$/
    const isValidPassword = regex.exec(event.target.value)
    if (!isValidPassword) {
      setPasswordError('영문 + 숫자 + 특수문자를 포함한 8~16자리 비밀번호 입력하세요.')
    } else {
      setPasswordError('')
    }

    if (retypedPassword !== event.target.value) {
      setRetypedPasswordError('비밀번호가 일치하지 않습니다.')
    } else {
      setRetypedPasswordError('')
    }
  }

  const onChangeRetypedPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setRetypedPassword(event.target.value)
    if (password !== event.target.value) {
      setRetypedPasswordError('비밀번호가 일치하지 않습니다.')
    } else {
      setRetypedPasswordError('')
    }
  }

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
    if (!event.target.value) {
      setNameError('닉네임은 비어있을 수 없어요!')
    } else {
      setNameError('')
    }
  }

  const onClickSignUp = () => {
    if (!emailError && !passwordError && !retypedPasswordError && !nameError) {
      alert('가입 완료!!!')
      void router.push(`/login`)
    } else {
      alert('다시 입력하세요!')
    }
  }

  return (
    <>
      이메일 : <input type="text" onChange={onChangeEmail} />
      <br />
      <div>{emailError}</div>
      비밀번호 : <input type="password" onChange={onChangePassword} />
      <br />
      <div>{passwordError}</div>
      비밀번호 재입력 : <input type="password" onChange={onChangeRetypedPassword} />
      <br />
      <div>{retypedPasswordError}</div>
      닉네임 : <input type="text" onChange={onChangeName} />
      <br />
      <div>{nameError}</div>
      <button onClick={onClickSignUp}>회원가입</button>
    </>
  )
}
