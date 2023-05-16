import styled from '@emotion/styled'

import { breakPoints } from '@/common/styles/media'

export const Container = styled.section`
  width: auto;

  @media ${breakPoints.tablet} {
    width: 44rem;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`

// **** 댓글 작성
export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const Avatar = styled.img`
  width: 3rem;
`

export const CommentTextArea = styled.textarea`
  width: 100%;
  height: 5rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-gray-3);
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
`
