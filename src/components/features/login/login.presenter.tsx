import { ILoginPresenter } from './login.types'
import * as S from './login.style'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import { Form, Input } from 'antd'
import { MyButton } from '@/components/common/customComponent.styles'

export default function LoginUI(props: ILoginPresenter) {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.LoginSection>
      <S.Wrapper>
        <S.LoginTitle>
          로그인
          <S.LoginSubTitle>다시 오셨네요!</S.LoginSubTitle>
        </S.LoginTitle>
        <Form>
          <Input onChange={props.onChangeEmail} type="text" placeholder="이메일을 입력해주세요." />
          <S.ErrorMessage>{props.emailError}</S.ErrorMessage>
          <Input onChange={props.onChangePassword} type="password" placeholder="비밀번호를 입력해주세요." />
          <S.ErrorMessage>{props.passwordError}</S.ErrorMessage>
          <S.LoginCheck>
            <S.LoginCheckInput type="radio" />
            <S.LoginCheckText>로그인 상태 유지</S.LoginCheckText>
          </S.LoginCheck>
          <MyButton type="primary" htmlType="submit" style={{ width: '100%' }} onClick={props.onClickLogIn}>
            로그인
          </MyButton>
        </Form>
        <S.SignupWrapper>
          아직 계정이 없으신가요?
          <S.SignupPageMoveSpan onClick={onClickMoveToPage(`/signup`)}>회원가입</S.SignupPageMoveSpan>
        </S.SignupWrapper>
        <S.Line />
        <S.SNSLogin>SNS 계정으로 로그인</S.SNSLogin>
        <S.SNSWrapper>
          <S.KakaoBtn>
            <S.Logo src="/images/kakaoLogo.png" />
          </S.KakaoBtn>
          <S.GoogleBtn>
            <S.Logo src="/images/googleLogo.png" />
          </S.GoogleBtn>
        </S.SNSWrapper>
      </S.Wrapper>
    </S.LoginSection>
  )
}
