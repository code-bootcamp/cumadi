import { breakPoints } from '@/common/styles/media'
import { ElevatedCard } from '@/components/common/customComponent.styles'
import styled from '@emotion/styled'
import { Avatar } from 'antd'

export const Container = styled.section`
  width: 44rem;
  text-align: center;

  @media ${breakPoints.tablet} {
    width: 44rem;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`

// **** 아바타 상단
export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin: 3rem 0;
`

export const MyAvatar = styled(Avatar)`
  width: 8rem;
  height: 8rem;
  border-radius: 4rem;
  margin-bottom: 0.5rem;
`

export const Writer = styled.div`
  font-size: 1.5rem;
`

export const Introduction = styled.div`
  font-size: 1rem;
  color: var(--color-gray-2);
`

// ****
export const Move = styled(ElevatedCard)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: white;
`

export const MoveDeleteUser = styled(ElevatedCard)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  background-color: white;
  div {
    color: var(--color-gray-2);
  }
`
