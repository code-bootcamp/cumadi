import styled from '@emotion/styled'
import { Button, Input } from 'antd'

export const ProfileSettingTitle = styled.h1`
  font-size: 2rem;
  margin-top: 2rem;
`
// **** 프로필 수정
export const ProfileWrapper = styled.div`
  display: flex;
  width: 50%;
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
`

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const AvatarImg = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 4rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
`

export const DeleteImgBtn = styled.span`
  font-weight: bold;
  color: #f56040;
  &:hover {
    cursor: pointer;
    color: #ff8b68;
  }
`

export const ProfileLine = styled.div`
  width: 1px;
  height: auto;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
  background-color: var(--color-gray-4);
`

export const ProfileEditWrapper = styled.div`
  width: 100%;
  text-align: left;
`

export const ProfileEditBtn = styled.span`
  font-weight: bold;
  color: #f56040;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
    color: #ff8b68;
  }
`

export const WriterInput = styled(Input)`
  width: 100%;
  height: 1.4rem;
  padding: 1.5rem 0.5rem;
  border-radius: 0.3rem;
  margin: 0.4rem 0;
  font-size: 1.5rem;
  font-weight: bold;
  border: solid 1px var(--color-gray-3);
`

export const IntroductionInput = styled(Input)`
  width: 100%;
  height: 1.4rem;
  padding: 1rem 0.5rem;
  border-radius: 0.2rem;
  margin: 0.4rem 0;
  border: solid 1px var(--color-gray-3);
`

export const Writer = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
`

export const Introduction = styled.div`
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-gray-2);
`

export const SaveBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const SaveBtn = styled(Button)`
  width: 5rem;
  display: flex;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  border: solid 1px var(--color-gray-3);
`

// **** 비밀번호 수정
export const PasswordWrapper = styled.div`
  display: flex;
  width: 50%;
`

export const Password = styled.div`
  width: 8rem;
  margin-right: 3rem;
  display: flex;
  align-items: center;
  font-weight: bold;
`

export const PasswordInput = styled(Input)`
  width: 78%;
  height: 1.4rem;
  padding: 1rem 1rem;
  border-radius: 0.3rem;
  margin: 0.4rem 0;
  border: solid 1px var(--color-gray-3);
`

export const PasswordBtnWrapper = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  gap: 0.5rem;
`

export const PasswordBtn = styled(Button)`
  width: 9rem;
  display: flex;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  border: solid 1px var(--color-gray-3);
`

export const ErrorTemp = styled.div`
  width: 8rem;
  margin-right: 3rem;
  display: flex;
  justify-content: flex-end;
`

export const ErrorWrapper = styled.div`
  display: flex;
  width: 50%;
`

export const Error = styled.span`
  width: 78%;
  font-size: 1rem;
  color: ${props => props.color};
`
