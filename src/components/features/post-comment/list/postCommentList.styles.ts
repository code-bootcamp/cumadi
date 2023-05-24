import styled from '@emotion/styled'

import { breakPoints } from '@/common/styles/media'

export const Container = styled.section`
  width: auto;
  margin-top: 3rem;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`

// **** 덧글 리스트 상단
export const CommentHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--color-gray-3);
  border-radius: 0.5rem;
  font-weight: bold;
`
export const CommentTitle = styled.div``
export const CommentCount = styled.div`
  color: var(--color-gray-2);
`

export const CommentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-gray-3);
`

// **** 댓글 상단
export const CommentTopWrapper = styled.div`
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

// **** 댓글리스트가 존재하지 않으면
export const CommentListNoTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding-top: 2rem;
`
export const CommentListNoSubTitle = styled.div`
  font-size: 1rem;
  color: var(--color-gray-1);
`

// **** 포스트 댓글 답변
export const PostCommentAnswerWrapper = styled.div`
  width: 100%;
  padding-left: 2rem;
  font-size: 1rem;
  color: var(--color-black);
`
