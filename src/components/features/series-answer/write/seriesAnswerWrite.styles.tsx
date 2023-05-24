import styled from '@emotion/styled'

import { breakPoints } from '@/common/styles/media'

export const Container = styled.section`
  width: 100%;
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

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1rem;
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

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  width: 5rem;
`
export const Writer = styled.div``

export const UserRate = styled.div`
  width: 10rem;
  margin-left: 1rem;
`
