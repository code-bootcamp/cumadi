import { breakPoints } from '@/common/styles/media'
import styled from '@emotion/styled'

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
  margin: 3rem 0;
`

export const Avatar = styled.img`
  width: 6rem;
`

export const Writer = styled.div`
  font-size: 1.5rem;
`

export const Introduction = styled.div`
  font-size: 1rem;
  color: var(--color-gray-2);
`

// ****
export const Move = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  font-size: 1rem;
  color: var(--color-black);
  border: 1px solid var(--color-gray-2);
  border-radius: 1rem;
  cursor: pointer;
`

export const MoveDeleteUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  font-size: 1rem;
  color: var(--color-error-red);
  border: 1px solid var(--color-gray-2);
  border-radius: 1rem;
`
