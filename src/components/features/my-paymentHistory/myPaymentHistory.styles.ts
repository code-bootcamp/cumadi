import { breakPoints } from '@/common/styles/media'
import styled from '@emotion/styled'

// **** 아바타 상단
export const Body = styled.section`
  width: 83rem;

  @media ${breakPoints.tablet} {
    width: 55rem;
  }

  @media ${breakPoints.mobile} {
    width: 30rem;
  }
`
