import { ChangeEvent } from 'react'

export interface ISignUpProps {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeCheckPassword: (event: ChangeEvent<HTMLInputElement>) => void
  onClickSignUp: () => void
  emailError: string
  nameError: string
  passwordError: string
  password1Error: string
}
