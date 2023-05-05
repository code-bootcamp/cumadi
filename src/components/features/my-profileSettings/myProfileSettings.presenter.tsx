import * as S from './myProfileSettings.styles'

export default function MyProfileSettingsUI(props: any) {
  return (
    <>
      <S.ProfileSettingTitle>프로필 수정</S.ProfileSettingTitle>
      <S.ProfileSettingBody>
        <S.AvatarWrapper>
          <S.AvatarImg src="/images/avatar.png" />
          <S.Writer>
            개발자
            <img src="/images/edit.svg" alt="편집 아이콘" />
          </S.Writer>
          <S.Introduction>
            개발새발 개발자
            <S.EditImg src="/images/edit.svg" alt="편집 아이콘" />
          </S.Introduction>
        </S.AvatarWrapper>
        <S.InputWrapper>
          <S.BasicInput onChange={props.onChangeEmail} type="password" placeholder="현재 비밀번호를 입력해 주세요." />
          {props.showPresentPassword ? (
            <S.ClickBt onClick={props.onClickShowPresentPassword}></S.ClickBt>
          ) : (
            <S.ClickBt onClick={props.onClickShowPresentPassword}></S.ClickBt>
          )}
          <S.BasicInput onChange={props.onChangePassword} type="password" placeholder="새 비밀번호를 입력해주세요." />
          {props.showNewPassword ? (
            <S.ClickBt onClick={props.onClickShowNewPassword}></S.ClickBt>
          ) : (
            <S.ClickBt onClick={props.onClickShowNewPassword}></S.ClickBt>
          )}
          <S.BasicInput onChange={props.onChangePassword} type="password" placeholder="새 비밀번호를 확인해주세요." />
          {props.password !== props.passwordCheck ? (
            <S.Error color="red">비밀번호가 일치하지 않습니다.</S.Error>
          ) : (
            <S.Error color="#086021e0">비밀번호가 일치합니다.</S.Error>
          )}
          <S.SaveButton type="primary">저장하기</S.SaveButton>
        </S.InputWrapper>
      </S.ProfileSettingBody>
    </>
  )
}
