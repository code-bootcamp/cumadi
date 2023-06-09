import styled from '@emotion/styled'
import { Select } from 'antd'

import { breakPoints } from '@/common/styles/media'
import { ElevatedCard } from '@/components/common/customComponent.styles'

export const Container = styled.section`
  width: 74rem;
  padding: 1rem;
  position: relative;

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

export const PostTagWrapper = styled.div`
  padding: 1rem 0;

  span {
    background-color: var(--color-muted);
    color: var(--color-primary);
    padding: 0.5rem 1rem;
    margin-right: 0.5rem;
    border-radius: 1rem;
  }
`

// **** 게시판 헤더
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

// **** 포스트가 시리즈에 속해있는지 여부
export const PostInSeries = styled.div`
  padding: 1rem;
  padding-bottom: 0.125rem;
  margin: 0 0 1rem 0;
  border-radius: 1rem;
  font-weight: bold;
  background-color: var(--color-gray-4);

  div {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`

export const TitleOfPostInSeries = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const PostInSeriesSelect = styled(Select)`
  width: 100%;
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

export const ThumbnailImage = styled(Image)`
  width: 100%;
  height: 15rem;
  object-fit: cover;
`

export const LikeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`

export const SaveTextBtn = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  background-color: var(--color-primary);
`

export const Like = styled(ElevatedCard)`
  font-weight: bold;
  cursor: pointer;
`

export const PostInSeriesWrapper = styled.ul`
  color: var(--color-gray-1);
`
export const PostsInSeries = styled.li`
  margin: 0.5rem 0;
  cursor: pointer;
  &:hover {
    color: var(--color-primary);
  }
`

// **** 포스트인시리즈 뷰
export const PostInSeriesView = styled.p`
  margin-top: 1rem;
  color: var(--color-gray-1);
  cursor: pointer;
`
