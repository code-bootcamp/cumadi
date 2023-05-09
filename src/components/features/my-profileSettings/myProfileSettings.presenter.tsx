import * as S from './myProfileSettings.styles'

export default function MyProfileSettingsUI(props: any) {
  // prettier-ignore
  return (
    <>
      <S.ProfileSettingTitle>프로필 수정</S.ProfileSettingTitle>
      <S.ProfileSettingBody>
        <S.AvatarWrapper>
          <S.AvatarImg src="/images/avatar.png" onClick={props.onClickImage} />
          <input style={{ display: 'none' }} type="file" onChange={props.onChangeImageFile} ref={props.fileRef} />
          <S.Writer>
            {props.showInputWriter ? <S.BasicInput defaultValue={props.writer} /> : props.writer}
            {props.showInputWriter ? '' : <S.EditImg1 src="/images/edit.svg" alt="편집 아이콘" onClick={props.onClickInputWriter} />}
          </S.Writer>
          <S.Introduction>
            {props.showInputIntro ? <S.BasicInput defaultValue={props.intro} /> : props.intro}
            {props.showInputIntro ? '' : <S.EditImg2 src="/images/edit.svg" alt="편집 아이콘" onClick={props.onClickInputIntro} />}
          </S.Introduction>
        </S.AvatarWrapper>
        <S.InputWrapper>
          <S.BasicInput onChange={props.onChangePresentPassword} type="password" placeholder="현재 비밀번호를 입력해 주세요." />
          {props.showPresentPassword ? (
            <S.ClickBt onClick={props.onClickShowPresentPassword}></S.ClickBt>
          ) : (
            <S.ClickBt onClick={props.onClickShowPresentPassword}></S.ClickBt>
          )}
          <S.BasicInput onChange={props.onChangeNewPassword} type="password" placeholder="새 비밀번호를 입력해주세요." />
          {props.showNewPassword ? (
            <S.ClickBt onClick={props.onClickShowNewPassword}></S.ClickBt>
          ) : (
            <S.ClickBt onClick={props.onClickShowNewPassword}></S.ClickBt>
          )}
          <S.BasicInput onChange={props.onChangePasswordCheck} type="password" placeholder="새 비밀번호를 확인해주세요." />
          {props.newPassword !== props.passwordCheck ? (
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
