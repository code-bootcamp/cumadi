import { breakPoints } from '@/common/styles/media'
import { ElevatedCard } from '@/components/common/customComponent.styles'
import { HeartFilled } from '@ant-design/icons'
import styled from '@emotion/styled'
import { Button } from 'antd'

export const SideNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  position: fixed;
  /* background-color: red; */
  right: 2rem;
  top: 30rem;
  width: 5rem;
  padding: 2rem;
  border: 1px solid var(--color-gray-2);
  border-radius: 1rem;
  z-index: 99;

  @media ${breakPoints.tablet} {
    width: 5rem;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`

export const Item = styled.div`
  font-size: 2rem;
  font-weight: 900;
  cursor: pointer;

  &:hover {
    color: var(--main-color);
  }
`

export const SavedButton = styled(Button)`
  font-size: 1.2rem;
  width: 4rem;
  height: 4rem;
  padding: 1rem;
  display: flex;
  border: 1px solid var(--color-gray-3);
  border-radius: 4rem;
`

export const HeartIcon = styled(HeartFilled)`
  padding: 0 0.5rem;
  font-size: 2rem;
  color: var(--color-primary);
  cursor: pointer;
`
