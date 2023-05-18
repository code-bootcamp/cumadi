import { breakPoints } from '@/common/styles/media'
import styled from '@emotion/styled'

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4.5rem;
  border-bottom: 1px solid var(--color-gray-3);
  background-color: var(--color-white);
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90rem;
  height: 4.5rem;
  font-size: 1rem;
  position: fixed;
  z-index: 99;
  background-color: var(--color-white);

  @media ${breakPoints.tablet} {
    width: 55rem;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    margin: 0 1rem;
  }
`

// **** 헤더 왼쪽
export const Logo = styled.img`
  width: 2.8rem;
  cursor: pointer;
`

// **** 헤더 오른쪽
export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
`

export const LoginMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const LoginButton = styled.button`
  padding: 0.5rem;
  margin-left: 0.5rem;
  border: 1px solid var(--color-gray-2);
  color: var(--color-black);
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: var(--main-color);
  }
`
