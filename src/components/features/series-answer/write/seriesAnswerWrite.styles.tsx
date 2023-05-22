import { breakPoints } from '@/common/styles/media'
import styled from '@emotion/styled'

export const Container = styled.section`
  width: 74rem;
  /* border-top: 1px solid var(--color-gray-1); */

  @media ${breakPoints.tablet} {
    width: 44rem;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.4rem;
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

export const CommentRate = styled.span`
  margin-bottom: 0.2rem;
  margin-left: 0.4rem;
`

export const ReviewContent = styled.textarea`
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

