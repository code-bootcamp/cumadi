import { Colors } from '@/common/styles/colors'
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

export const ReviewHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--color-gray-3);
  border-radius: 0.5rem;
  font-weight: bold;
`
export const ReviewTitle = styled.div``
export const ReviewCount = styled.div`
  color: var(--color-gray-2);
`

export const ReviewListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-gray-3);
`

// **** 댓글 상단
export const ReviewListTopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CommentRate = styled.span`
  margin-left: 0.5rem;
`

export const CommentListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
`

export const ListRate = styled.div`
  text-align: center;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
export const Avatar = styled.img`
  width: 3rem;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`
export const Writer = styled.div``
export const CreatedAt = styled.div`
  color: #bdbdbd;
`

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  color: var(--color-gray-1);
`

export const Date = styled.div`
  font-size: 1rem;
  color: ${Colors.gray1};
`
export const Contents = styled.div`
  width: 100%;
  font-size: 1rem;
  color: 1px solid var(--color-gray-3);
`

export const UserRate = styled.div`
  margin: 0.5rem 0 0 0.2rem;
`

export const ReviewListNoTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding-top: 2rem;
`
export const ReviewListNoSubTitle = styled.div`
  font-size: 1rem;
  color: var(--color-gray-1);
`