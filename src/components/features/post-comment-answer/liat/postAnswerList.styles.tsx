import styled from '@emotion/styled'

export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0 0.5rem 2rem;
  border-bottom: 1px solid var(--color-gray-3);
`

// **** 댓글 상단
export const CommentTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

// **** 댓글 상단 - 유저 영역
export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`
export const Avatar = styled.img`
  width: 3rem;
`
export const AvatarIntro = styled.div``
export const Date = styled.div`
  font-size: 0.9rem;
  color: var(--color-gray-1);
`

// **** 댓글 상단 - 버튼 영역
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  color: var(--color-gray-1);
`

export const Contents = styled.div`
  width: 100%;
  font-size: 1rem;
  color: var(--color-black);
`
