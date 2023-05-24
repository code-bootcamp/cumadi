import styled from '@emotion/styled'

import { breakPoints } from '@/common/styles/media'

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

export const CardThumbnailImg = styled.img`
  width: 100%;
  height: 13rem;
  object-fit: cover;
`
