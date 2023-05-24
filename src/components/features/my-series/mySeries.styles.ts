import { breakPoints } from '@/common/styles/media'
import { MyButton } from '@/components/common/customComponent.styles'
import styled from '@emotion/styled'

// **** 아바타 상단
export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
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

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 25rem;
  width: 83rem;
  padding: 1.5rem;

  @media ${breakPoints.tablet} {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    width: 55rem;
  }

  @media ${breakPoints.mobile} {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    width: 100%;
  }
`

export const TypeButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
`

export const TagWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
`

export const PlusImg = styled.img`
  width: 1rem;
`

export const RegisterBtn = styled(MyButton)`
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-gray-3);
  border-radius: 1.5rem;
  font-weight: bold;
`

// **** 포스트, 시리즈 목록
export const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  width: 84rem;
  margin: 3rem 0;

  @media ${breakPoints.tablet} {
    width: 65rem;
  }

  @media ${breakPoints.mobile} {
    width: 50rem;
  }
`
