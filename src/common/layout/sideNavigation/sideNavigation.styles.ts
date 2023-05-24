import { HeartFilled, HighlightOutlined } from '@ant-design/icons'
import styled from '@emotion/styled'
import { Button } from 'antd'

import { breakPoints } from '@/common/styles/media'

export const sideNavWrapper = styled.div`
  position: absolute;
  left: -8rem;
  top: 30rem;
  background-color: var(--color-white);
`

export const SideNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: fixed;
  padding: 0.3rem;
  border: 1px solid var(--color-gray-3);
  background-color: var(--color-white);
  border-radius: 5rem;

  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`

export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const SavedButton = styled(Button)`
  font-size: 1.2rem;
  width: 3rem;
  height: 3rem;
  padding: 1rem;
  display: flex;
  border: 1px solid var(--color-gray-3);
  border-radius: 4rem;
`

export const HeartIcon = styled(HeartFilled)`
  padding: 0 0.5rem;
  font-size: 1.5rem;
  color: var(--color-primary);
  cursor: pointer;
`

export const SaveIcon = styled(HighlightOutlined)`
  padding: 0 0.5rem;
  font-size: 1.5rem;
  color: var(--color-black);
  cursor: pointer;
`
