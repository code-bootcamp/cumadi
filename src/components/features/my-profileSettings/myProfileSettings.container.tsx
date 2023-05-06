import { ChangeEvent, useState } from 'react'
import MyProfileSettingsUI from './myProfileSettings.presenter'

export default function MyProfileSettings() {
  // **** 상태
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')

  // ** 유효성 검사
  const [showPresentPassword, setShowPresentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showCheckPassword, setShowCheckPassword] = useState(false)

  // **** PlayGround
  // const [resetUserPassword] = useMutation(RESET_USER_PASSWORD)

  // **** 값이 있다면, 유효성 검사 메시지 지우기
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)
  const onChangePasswordCheck = (event: ChangeEvent<HTMLInputElement>) => setPasswordCheck(event.target.value)
  const onClickShowPresentPassword = () => setShowPresentPassword(prev => !prev)
  const onClickShowNewPassword = () => setShowNewPassword(prev => !prev)
  const onClickShowCheckPassword = () => setShowCheckPassword(prev => !prev)

  // **** 비밀번호 변경 요청
  const onClickResetPassword = async () => {
    // try {
    //   if (password === passwordCheck) {
    //     const result = await resetUserPassword({
    //       variables: {
    //         password,
    //       },
    //     })
    //     if (result?.data?.resetUserPassword === true) {
    //       SuccessModal('비밀번호가 바뀌였습니다.')
    //     }
    //   } else {
    //     ErrorModal('비밀번호가 일치하지 않습니다.')
    //   }
    // } catch (error) {
    //   if (error instanceof Error) ErrorModal(error.message)
    // }
  }

  return (
    <MyProfileSettingsUI
      password={password}
      passwordCheck={passwordCheck}
      showPresentPassword={showPresentPassword}
      showNewPassword={showNewPassword}
      showCheckPassword={showCheckPassword}
      onClickResetPassword={onClickResetPassword}
      onClickShowPresentPassword={onClickShowPresentPassword}
      onClickShowNewPassword={onClickShowNewPassword}
      onClickShowCheckPassword={onClickShowCheckPassword}
      onChangePassword={onChangePassword}
      onChangePasswordCheck={onChangePasswordCheck}
    />
  )
}
