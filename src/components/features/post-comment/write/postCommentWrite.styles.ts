import styled from '@emotion/styled'

import { breakPoints } from '@/common/styles/media'

export const Container = styled.section`
  width: 100%;
  margin: 1rem 0;
  border: 1px solid var(--color-gray-3);
  border-radius: 0.4rem;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`

// **** 댓글 작성
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: var(--color-gray-1);
`

export const CommentContent = styled.textarea`
  width: 100%;
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  outline-color: var(--color-primary);
`

export const ColorButton = styled.button`
  display: flex;
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  color: var(--color-white);
  background-color: var(--color-primary);
`

export const ContentsLength = styled.div`
  width: 100%;
  align-self: center;
  padding-left: 1rem;
  color: var(--color-gray-500);
`
