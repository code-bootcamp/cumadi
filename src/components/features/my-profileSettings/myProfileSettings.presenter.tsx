import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import * as S from './myProfileSettings.styles'
import { IMyProfileSettingsUIProps } from './myProfileSettiong.types'

export default function MyProfileSettingsUI(props: IMyProfileSettingsUIProps) {
  const { onClickMoveToPage } = useMoveToPage()
  // prettier-ignore
  return (
    <>
      <S.ProfileSettingTitle>프로필 수정</S.ProfileSettingTitle>
      <S.ProfileWrapper>
        <S.AvatarWrapper>
          <S.AvatarImg src={props.loginData?.fetchUserLoggedIn.image ? props.loginData.fetchUserLoggedIn.image :'/images/avatar.png'} onClick={props.onClickImage} />
          <input style={{ display: 'none' }} type="file" onChange={props.onChangeImageFile} ref={props.fileRef} />
          <S.DeleteImgBtn onClick={props.onClickDeleteImgBtn}>이미지 제거</S.DeleteImgBtn>
        </S.AvatarWrapper>
        <S.ProfileLine />
        <S.ProfileEditWrapper>
          {props.showProfileEdit ? (
            <>
              <S.WriterInput defaultValue={props.loginData?.fetchUserLoggedIn.nickname} onChange={props.onChangeNickname} />
              <S.IntroductionInput
                defaultValue={props.loginData?.fetchUserLoggedIn.introduction? props.loginData?.fetchUserLoggedIn.introduction : '자기소개를 입력하세요.'}
                onChange={props.onChangeIntroduction}
              />
              <S.SaveBtnWrapper>
                <S.SaveBtn type="primary" onClick={props.onClickSaveProfileBtn}>
                  저장
                </S.SaveBtn>
              </S.SaveBtnWrapper>
            </>
          ) : (
            <>
              <S.Writer>{props.loginData?.fetchUserLoggedIn.nickname}</S.Writer>
              <S.Introduction>{props.loginData?.fetchUserLoggedIn.introduction? props.loginData?.fetchUserLoggedIn.introduction : '자기소개를 입력하세요.'}</S.Introduction>
              <S.ProfileEditBtn onClick={props.onClickProfileEditBtn}>수정</S.ProfileEditBtn>
            </>
          )}
        </S.ProfileEditWrapper>
      </S.ProfileWrapper>
      <S.PasswordWrapper>
        <S.Password>현재 비밀번호</S.Password>
        <S.PasswordInput
          onChange={props.onChangecurrentPassword}
          type="password"
          placeholder="현재 비밀번호를 입력해 주세요."
        />
      </S.PasswordWrapper>
      <S.ErrorWrapper>
        <S.ErrorTemp />
        <S.Error color="red">{props.currentPasswordError}</S.Error>
      </S.ErrorWrapper>

      <S.PasswordWrapper>
        <S.Password>새 비밀번호</S.Password>
        <S.PasswordInput
          onChange={props.onChangeNewPassword}
          type="password"
          placeholder="새로운 비밀번호를 입력해 주세요."
        />
      </S.PasswordWrapper>
      <S.ErrorWrapper>
        <S.ErrorTemp />
        <S.Error color="red">{props.newPasswordError}</S.Error>
      </S.ErrorWrapper>

      <S.PasswordWrapper>
        <S.Password>새 비밀번호 확인</S.Password>
        <S.PasswordInput
          onChange={props.onChangePasswordCheck}
          type="password"
          placeholder="새로운 비밀번호를 다시 입력해 주세요."
        />
      </S.PasswordWrapper>
      <S.ErrorWrapper>
        <S.ErrorTemp />
        <S.Error color="red">{props.checkPasswordError}</S.Error>
      </S.ErrorWrapper>
      <S.PasswordBtnWrapper>
        <S.PasswordBtn onClick={onClickMoveToPage('/my')}>다음에 변경하기</S.PasswordBtn>
        <S.PasswordBtn type="primary" onClick={props.onClickResetPassword}>
          비밀번호 변경하기
        </S.PasswordBtn>
      </S.PasswordBtnWrapper>
    </>
  )
}
