import styled from '@emotion/styled'

// **** 로그인 메뉴
export const SignUpSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-gray-2);
`

export const Wrapper = styled.div`
  width: 50rem;
  margin: 1rem auto;
  padding: 5rem;
  background-color: var(--color-gray-3);
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
  /* background-color: Yellowgreen; */
  width: 100%;
  margin-top: 1rem;
`

export const BasicInput = styled.input`
  width: 100%;
  height: 1.4rem;
  padding: 2rem 1rem;
  border: 1px solid var(--color-gray-300);
  border-radius: 1rem;
  margin: 0.4rem 0;
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

export const CancelBtn = styled.button`
  width: 100%;
  height: 5rem;
  margin: 0.4rem 0;
  padding: 1rem 1.5rem;
  color: var(--color-white);
  background-color: var(--color-gray-2);
`

export const SignUpBtn = styled.button`
  width: 100%;
  height: 5rem;
  margin: 0.4rem 0;
  padding: 1rem 1.5rem;
  color: var(--color-white);
  background-color: var(--color-primary);
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
