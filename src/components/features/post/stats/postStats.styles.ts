import { breakPoints } from '@/common/styles/media'
import styled from '@emotion/styled'

export const Container = styled.section`
  width: 83rem;

  @media ${breakPoints.tablet} {
    width: 65rem;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`

export const TopBox = styled.div`
  padding: 1rem;
  margin: 1rem;
  background-color: var(--color-gray-3);
`

export const VisitorNumber = styled.div`
  font-size: 1rem;
  padding: 1rem;
`
