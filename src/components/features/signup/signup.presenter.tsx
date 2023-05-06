import { ISignUpProps } from './signup.types'
import * as S from './signup.style'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'

export default function SignUpUI(props: ISignUpProps) {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.SignUpSection>
      <S.Wrapper>
        <S.LoginTitle>
          회원가입
          <S.LoginSubTitle>처음이시죠? 반가워요!</S.LoginSubTitle>
        </S.LoginTitle>

        <S.InputWrapper>
          <S.BasicInput onChange={props.onChangeEmail} type="text" placeholder="이메일을 입력해주세요." />
          <S.ErrorMessage>{props.emailError}</S.ErrorMessage>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.BasicInput onChange={props.onChangeName} type="text" placeholder="이름을 입력해주세요." />
          <S.ErrorMessage>{props.nameError}</S.ErrorMessage>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.BasicInput onChange={props.onChangePassword} type="password" placeholder="비밀번호를 입력해주세요." />
          <S.ErrorMessage>{props.passwordError}</S.ErrorMessage>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.BasicInput
            onChange={props.onChangeCheckPassword}
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
          />
          <S.ErrorMessage>{props.password1Error}</S.ErrorMessage>
        </S.InputWrapper>
        <S.ButtonWrapper>
          <S.CancelBtn onClick={onClickMoveToPage(`/`)}>취소</S.CancelBtn>
          <S.SignUpBtn onClick={props.onClickSignUp}>회원가입하기</S.SignUpBtn>
        </S.ButtonWrapper>
        <S.SignupWrapper>
          이미 아이디가 있으신가요?
          <S.SignupPageMoveSpan onClick={onClickMoveToPage(`/login`)}>로그인</S.SignupPageMoveSpan>
        </S.SignupWrapper>
      </S.Wrapper>
    </S.SignUpSection>
  )
}
