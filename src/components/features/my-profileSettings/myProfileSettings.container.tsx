import { ChangeEvent, useRef, useState } from 'react'
import MyProfileSettingsUI from './myProfileSettings.presenter'

export default function MyProfileSettings() {
  // **** 작성자, 자기소개 더미 데이터
  const [writer, setWriter] = useState('작성자')
  const [intro, setIntro] = useState('개발새발 개발자')

  // **** 상태
  const [presentPassword, setPresentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')

  // ** 파일 태그
  const fileRef = useRef<HTMLInputElement>(null)

  // ** 유효성 검사
  const [PresentPasswordError, setPresentPasswordError] = useState('')
  const [newPasswordError, setNewPasswordError] = useState('')
  const [checkPasswordError, setCheckPasswordError] = useState('')

  // ** 프로필 편집 버튼 클릭 여부
  const [showInputWriter, setShowInputWriter] = useState(false)
  const [showInputIntro, setShowInputIntro] = useState(false)

  // **** PlayGround
  // const [resetUserPassword] = useMutation(RESET_USER_PASSWORD)

  // **** 값이 있다면, 유효성 검사 메시지 지우기
  const onChangePresentPassword = (event: ChangeEvent<HTMLInputElement>) => setPresentPassword(event.target.value)

  const onChangeNewPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value)
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,16}$/
    if (event.target.value && !regex.test(event.target.value))
      setNewPasswordError('영문+숫자+특수문자 조합 8~16자리의 비밀번호를 입력해 주세요.')
    else setNewPasswordError('')

    if (passwordCheck && passwordCheck !== event.target.value) setCheckPasswordError('비밀번호가 일치하지 않습니다.')
    else setCheckPasswordError('')
  }

  const onChangePasswordCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(event.target.value)
    if (event.target.value && newPassword !== event.target.value) setCheckPasswordError('비밀번호가 일치하지 않습니다.')
    else setCheckPasswordError('')
  }

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

  // **** 이미지 파일 업로드
  const onClickImage = () => {
    fileRef.current?.click()
  }

  const onChangeImageFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
  }

  // **** 프로필 편집버튼 활성화
  const onClickInputWriter = () => {
    setShowInputWriter(true)
  }

  const onClickInputIntro = () => {
    setShowInputIntro(true)
  }

  return (
    <MyProfileSettingsUI
      newPassword={newPassword}
      passwordCheck={passwordCheck}
      fileRef={fileRef}
      writer={writer}
      intro={intro}
      PresentPasswordError={PresentPasswordError}
      newPasswordError={newPasswordError}
      checkPasswordError={checkPasswordError}
      showInputWriter={showInputWriter}
      showInputIntro={showInputIntro}
      onClickResetPassword={onClickResetPassword}
      onClickImage={onClickImage}
      onClickInputWriter={onClickInputWriter}
      onClickInputIntro={onClickInputIntro}
      onChangePresentPassword={onChangePresentPassword}
      onChangeNewPassword={onChangeNewPassword}
      onChangePasswordCheck={onChangePasswordCheck}
      onChangeImageFile={onChangeImageFile}
    />
  )
}
