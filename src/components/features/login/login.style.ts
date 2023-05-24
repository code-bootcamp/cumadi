import { ElevatedCard } from '@/components/common/customComponent.styles'
import styled from '@emotion/styled'
import { Input } from 'antd'

// **** 로그인 레이아웃
export const LoginSection = styled.section`
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

// ** 로그인 타이틀
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

export const ErrorMessage = styled.div`
  margin: 0.5rem 0;
  color: red;
`

// **** 로그인 상태 유지
export const LoginCheck = styled.div`
  margin: 2rem 0;
`

export const LoginCheckInput = styled.input``
export const LoginCheckText = styled.span`
  padding-left: 1rem;
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

export const Line = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  height: 1px;
  width: 100%;
  background-color: var(--color-gray-3);
`

export const SNSLogin = styled.div`
  display: flex;
  justify-content: center;
`

export const SNSWrapper = styled.div`
  margin-top: 0.4rem;
  display: flex;
  justify-content: center;
`

export const KakaoBtn = styled.button`
  margin-right: 0.4rem;
`

export const GoogleBtn = styled.button``

export const Logo = styled.img`
  width: 3rem;
  height: 3rem;
`
