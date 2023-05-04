import styled from '@emotion/styled'

// **** 로그인 레이아웃
export const LoginSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  /* background-color: var(--color-gray-2); */
`

export const Wrapper = styled.div`
  width: 50rem;
  height: 50rem;
  margin: 1rem auto;
  padding: 5rem;
  background-color: var(--color-gray-3);
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

// **** 로그인 입력
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

// **** 로그인 상태 유지
export const LoginCheck = styled.div`
  margin: 2rem 0;
`

export const LoginCheckInput = styled.input``
export const LoginCheckText = styled.span`
  padding-left: 1rem;
`

// **** 로그인 버튼
export const LoginBtn = styled.button`
  width: 100%;
  height: 2.5rem;
  margin: 0.4rem 0;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  font-weight: bold;
  color: var(--color-white);
  background-color: var(--color-primary);
`

export const KakoLoginBtn = styled.button`
  width: 100%;
  height: 2.5rem;
  margin: 0.4rem 0;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  color: var(--color-black);
  font-weight: bold;
  background-color: #fee500;
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