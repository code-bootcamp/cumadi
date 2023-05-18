import { HeartFilled, HighlightOutlined } from '@ant-design/icons'
import styled from '@emotion/styled'
import { Button } from 'antd'

import { breakPoints } from '@/common/styles/media'

export const SideNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: fixed;
  left: 2rem;
  top: 30rem;
  padding: 0.3rem;
  border: 1px solid var(--color-gray-2);
  border-radius: 5rem;
  z-index: 99;

  @media ${breakPoints.tablet} {
    width: 5rem;
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
