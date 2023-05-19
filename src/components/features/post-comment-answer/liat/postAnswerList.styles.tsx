import { breakPoints } from '@/common/styles/media'
import styled from '@emotion/styled'

export const Container = styled.section`
  width: auto;
  margin-top: 3rem;

  @media ${breakPoints.tablet} {
    width: 44rem;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`

// **** 덧글 리스트 상단
export const CommentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* padding: 0.5rem 0; */
  border-bottom: 1px solid var(--color-gray-2);
`

export const CommentTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`

export const CommentCount = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: var(--color-gray-2);
`

// **** 덧글 리스트 컨테이너
export const CommentListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
`
export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-gray-2);
`
export const CommentListNoTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`
export const CommentListNoSubTitle = styled.div`
  font-size: 1rem;
  color: var(--color-gray-1);
`

// **** 댓글리스트가 존재하면
export const AvatarWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  padding: 0.5rem 0;
`

export const Avatar = styled.img`
  width: 3rem;
`

export const Date = styled.div`
  font-size: 1rem;
  color: 1px solid var(--color-gray-3);
`
export const Contents = styled.div`
  width: 100%;
  font-size: 1rem;
  color: 1px solid var(--color-gray-3);
`
