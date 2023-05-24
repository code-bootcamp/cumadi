import { ElevatedCard } from '@/components/common/customComponent.styles'
import styled from '@emotion/styled'
import { Input } from 'antd'

// **** 로그인 메뉴
export const SignUpSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled(ElevatedCard)`
  width: 50rem;
  height: fit-content;
  margin: 1rem auto;
  padding: 2rem 4rem;
  background-color: var(--color-white);
`

// 로그인 타이틀
export const LoginTitle = styled.h4`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 5rem;
`

export const LoginSubTitle = styled.p`
  margin-top: 0.5rem;
  font-size: 1.5rem;
`

// **** 회원가입 입력
export const InputWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
`

export const ErrorMessage = styled.div`
  margin: 0.5rem 0;
  color: red;
`

// **** 회원가입 버튼
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`

export const SignupWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`

export const SignupPageMoveSpan = styled.span`
  font-weight: bold;
  margin-left: 1rem;
  color: var(--color-primary);
  border-bottom: 2px solid var(--color-primary);
  cursor: pointer;
`
