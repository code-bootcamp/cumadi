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
  const [showPresentPassword, setShowPresentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showCheckPassword, setShowCheckPassword] = useState(false)

  // ** 프로필 편집 버튼 클릭 여부
  const [showInputWriter, setShowInputWriter] = useState(false)
  const [showInputIntro, setShowInputIntro] = useState(false)

  // **** PlayGround
  // const [resetUserPassword] = useMutation(RESET_USER_PASSWORD)

  // **** 값이 있다면, 유효성 검사 메시지 지우기
  const onChangePresentPassword = (event: ChangeEvent<HTMLInputElement>) => setPresentPassword(event.target.value)
  const onChangeNewPassword = (event: ChangeEvent<HTMLInputElement>) => setNewPassword(event.target.value)
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
      showPresentPassword={showPresentPassword}
      showNewPassword={showNewPassword}
      showCheckPassword={showCheckPassword}
      onClickResetPassword={onClickResetPassword}
      onClickShowPresentPassword={onClickShowPresentPassword}
      onClickShowNewPassword={onClickShowNewPassword}
      onClickShowCheckPassword={onClickShowCheckPassword}
      onClickImage={onClickImage}
      onClickInputWriter={onClickInputWriter}
      onClickInputIntro={onClickInputIntro}
      onChangePresentPassword={onChangePresentPassword}
      onChangeNewPassword={onChangeNewPassword}
      onChangePasswordCheck={onChangePasswordCheck}
      onChangeImageFile={onChangeImageFile}
      fileRef={fileRef}
      writer={writer}
      intro={intro}
      showInputWriter={showInputWriter}
      showInputIntro={showInputIntro}
    />
  )
}
