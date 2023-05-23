import { ChangeEvent, useRef, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { Modal } from 'antd'
import { useRouter } from 'next/router'

import MyProfileSettingsUI from './myProfileSettings.presenter'
import { UPDATE_USER, UPDATE_USER_PASSWORD, UPLOAD_IMAGE } from './myProfileSettings.queries'
import { FETCH_USER_LOGGED_IN } from '@/common/layout/header/Header.queries'
import { checkFileValidation } from '../../../common/libraries/validation'
import type {
  IMutation,
  IMutationUpdateUserArgs,
  IMutationUpdateUserPasswordArgs,
  IMutationUploadImageArgs,
  IQuery,
  IUpdateUserInput,
} from '@/common/types/generated/types'

export default function MyProfileSettings() {
  const router = useRouter()

  // **** 상태
  const [nickname, setNickname] = useState<string>('')
  const [introduction, setIntroduction] = useState<string>('')
  const [currentPassword, setCurrentPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [passwordCheck, setPasswordCheck] = useState<string>('')

  // ** 프로필 편집 버튼 클릭 여부
  const [showProfileEdit, setShowProfileEdit] = useState<boolean>(false)

  // ** 파일 태그
  const fileRef = useRef<HTMLInputElement>(null)

  // ** 유효성 검사
  const [currentPasswordError, setCurrentPasswordError] = useState<string>('')
  const [newPasswordError, setNewPasswordError] = useState<string>('')
  const [checkPasswordError, setCheckPasswordError] = useState<string>('')

  // **** PlayGround
  const [updateUserPassword] = useMutation<Pick<IMutation, 'updateUserPassword'>, IMutationUpdateUserPasswordArgs>(
    UPDATE_USER_PASSWORD,
  )
  const { data: loginData } = useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN)
  const [updateUser] = useMutation<Pick<IMutation, 'updateUser'>, IMutationUpdateUserArgs>(UPDATE_USER)
  const [uploadImage] = useMutation<Pick<IMutation, 'uploadImage'>, IMutationUploadImageArgs>(UPLOAD_IMAGE)

  // **** 값이 있다면, 유효성 검사 메시지 지우기
  const onChangecurrentPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentPassword(event.target.value)
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,16}$/
    if (event.target.value && !regex.test(event.target.value))
      setCurrentPasswordError('영문+숫자+특수문자 조합 8~16자리의 비밀번호를 입력해 주세요.')
    else setCurrentPasswordError('')
  }

  // **** 이벤트 핸들러 함수
  const onChangeNickname = (event: ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value)
  }

  const onChangeIntroduction = (event: ChangeEvent<HTMLInputElement>) => {
    setIntroduction(event.target.value)
  }

  const onClickProfileEditBtn = () => setShowProfileEdit(true)

  // **** 비밀번호 유효성 검사 체크
  const onChangeNewPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value)
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,16}$/
    if (event.target.value && !regex.test(event.target.value))
      setNewPasswordError('영문+숫자+특수문자 조합 8~16자리의 비밀번호를 입력해 주세요.')
    else setNewPasswordError('')

    if (passwordCheck !== event.target.value) setCheckPasswordError('비밀번호가 일치하지 않습니다.')
    else setCheckPasswordError('')
  }

  const onChangePasswordCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(event.target.value)
    if (event.target.value && newPassword !== event.target.value) setCheckPasswordError('비밀번호가 일치하지 않습니다.')
    else setCheckPasswordError('')
  }

  // **** 이미지 파일 업로드
  const onClickImage = () => fileRef.current?.click()

  const onChangeImageFile = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = event.target.files?.[0]
    const isValid = checkFileValidation(file)

    if (!isValid) return
    try {
      const uploadimageResult = await uploadImage({ variables: { file } })

      await updateUser({
        variables: {
          updateUserInput: { image: uploadimageResult.data?.uploadImage },
        },
        refetchQueries: [{ query: FETCH_USER_LOGGED_IN }],
      })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  const onClickDeleteImgBtn = async () => {
    try {
      await updateUser({
        variables: {
          updateUserInput: { image: '' },
        },
        refetchQueries: [{ query: FETCH_USER_LOGGED_IN }],
      })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  // **** 프로필 정보 변경 요청
  const onClickSaveProfileBtn = async () => {
    setShowProfileEdit(false)

    const updateUserInput: IUpdateUserInput = {}
    if (nickname) updateUserInput.nickname = nickname
    if (introduction) updateUserInput.introduction = introduction

    try {
      await updateUser({
        variables: {
          updateUserInput,
        },
        refetchQueries: [{ query: FETCH_USER_LOGGED_IN }],
      })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  // **** 비밀번호 변경 요청
  const onClickResetPassword = async () => {
    try {
      if (
        currentPassword &&
        newPassword &&
        passwordCheck &&
        !currentPasswordError &&
        !newPasswordError &&
        !checkPasswordError
      ) {
        const result = await updateUserPassword({
          variables: {
            currentPassword,
            newPassword,
          },
        })

        if (result?.data?.updateUserPassword === true) {
          Modal.success({ content: '비밀번호가 변경되었습니다.' })
          router.push(`/my`)
        }
      } else {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,16}$/
        if (!currentPassword || !passwordRegex.test(currentPassword)) {
          setCurrentPasswordError('영문+숫자+특수문자 조합 8~16자리의 비밀번호를 입력해 주세요.')
        }

        if (!passwordRegex.test(newPassword)) {
          setNewPasswordError('영문+숫자+특수문자 조합 8~16자리의 비밀번호를 입력해 주세요.')
        }

        if (!passwordRegex.test(passwordCheck)) {
          setCheckPasswordError('영문+숫자+특수문자 조합 8~16자리의 비밀번호를 입력해 주세요.')
        }

        if (newPassword !== passwordCheck) setCheckPasswordError('비밀번호가 일치하지 않습니다.')
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return (
    <MyProfileSettingsUI
      fileRef={fileRef}
      loginData={loginData}
      currentPasswordError={currentPasswordError}
      newPasswordError={newPasswordError}
      checkPasswordError={checkPasswordError}
      showProfileEdit={showProfileEdit}
      onClickResetPassword={onClickResetPassword}
      onClickImage={onClickImage}
      onClickProfileEditBtn={onClickProfileEditBtn}
      onClickSaveProfileBtn={onClickSaveProfileBtn}
      onClickDeleteImgBtn={onClickDeleteImgBtn}
      onChangeNickname={onChangeNickname}
      onChangeIntroduction={onChangeIntroduction}
      onChangecurrentPassword={onChangecurrentPassword}
      onChangeNewPassword={onChangeNewPassword}
      onChangePasswordCheck={onChangePasswordCheck}
      onChangeImageFile={onChangeImageFile}
    />
  )
}
