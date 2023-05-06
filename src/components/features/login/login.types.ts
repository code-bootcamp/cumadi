import { ChangeEvent } from 'react'

export interface ILoginPresenter {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
  onClickLogIn: () => void
  emailError: string
  passwordError: string
}
