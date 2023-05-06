import { breakPoints } from '@/common/styles/media'
import { ElevatedCard } from '@/components/common/customComponent.styles'
import styled from '@emotion/styled'

export const Container = styled.section`
  width: 74rem;
  padding: 1rem;
  /* background-color: yellowgreen; */

  @media ${breakPoints.tablet} {
    width: 44rem;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`

// 본문 내용
export const PostTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`

export const PostSubTitle = styled.div`
  font-size: 1.5rem;
  color: var(--color-gray-2);
`

export const PostTagWapper = styled.div`
  padding: 1rem 0;
`

export const PostTag = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--color-main);
  margin-right: 1rem;
`

// **** 게시판 헤더
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding: 1rem 0;
`

// ** 게시판 헤더 - 프로필이미지, 이름, 생성일
export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
export const Avatar = styled.img``
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

// ** 게시판 헤더 - 오른쪽
export const PostUpdateBtnWrapper = styled.div`
  text-align: center;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  color: var(--color-gray-2);
`

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  width: auto;
  height: auto;
  margin-bottom: 20px;
`

export const LikeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`

export const Like = styled(ElevatedCard)`
  font-weight: bold;
  cursor: pointer;
`
