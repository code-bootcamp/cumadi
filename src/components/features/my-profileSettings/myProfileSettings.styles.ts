import styled from '@emotion/styled'
import { Button } from 'antd'
// import Input from 'antd/es/input/Input'

export const ProfileSettingTitle = styled.h1`
  font-size: 2rem;
  margin-top: 2rem;
`

// **** 왼쪽 아바타
export const AvatarWrapper = styled.div`
  width: 10rem;
  text-align: center;
`
export const AvatarImg = styled.img`
  width: 7rem;
  margin-bottom: 1rem;
  cursor: pointer;
`

export const EditImg1 = styled.img`
  cursor: pointer;
`

export const EditImg2 = styled.img`
  width: 1rem;
  color: var(--color-gray-2);
  cursor: pointer;
`

export const Writer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
`

export const Introduction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  margin-top: 0.5rem;
  color: var(--color-gray-2);
`

export const ProfileSettingBody = styled.div`
  display: flex;
  gap: 5rem;
  margin-top: 5rem;
`

// **** 오른쪽 비밀번호 수정
export const InputWrapper = styled.div`
  width: 23rem;
`

export const BasicInput = styled.input`
  margin-bottom: 0.5rem;
  border: 1px solid var(--color-gray-2);
`

export const ErrorMessage = styled.div`
  margin: 0.2rem 0;
  color: red;
`

export const SaveButton = styled(Button)`
  display: flex;
  padding: 1rem;
  margin-top: 3rem;
  border-radius: 1rem;
`

export const Error = styled.div`
  font-size: 1rem;
  color: ${props => props.color};
`

export const ClickBt = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`
