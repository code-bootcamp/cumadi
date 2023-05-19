import styled from '@emotion/styled'

import { breakPoints } from '@/common/styles/media'

export const Container = styled.section`
  width: auto;
  margin: 1rem 0;
  border: 1px solid var(--color-gray-3);
  border-radius: 0.4rem;

  @media ${breakPoints.tablet} {
    width: 44rem;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`

// **** 댓글 작성
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 0.5rem;
  color: var(--color-gray-1);
`
