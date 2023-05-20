import { IUser } from '@/common/types/generated/types'
import { ChangeEvent, MouseEvent, MouseEventHandler } from 'react'

export interface IMyProfileSettingsUIProps {
  currentPasswordError: string
  newPasswordError: string
  checkPasswordError: string
  showProfileEdit: boolean
  loginData: any
  fileRef: React.ForwardedRef<HTMLInputElement>
  onClickResetPassword: any
  onClickImage: (event: MouseEvent<HTMLImageElement>) => void
  onClickProfileEditBtn: (event: MouseEvent<HTMLSpanElement>) => void
  onClickSaveProfileBtn: (event: MouseEvent<HTMLSpanElement>) => void
  onClickDeleteImgBtn: (event: MouseEvent<HTMLSpanElement>) => void
  onChangeNickname: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeIntroduction: (event: ChangeEvent<HTMLInputElement>) => void
  onChangecurrentPassword: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeNewPassword: (event: ChangeEvent<HTMLInputElement>) => void
  onChangePasswordCheck: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeImageFile: (event: ChangeEvent<HTMLInputElement>) => void
}
