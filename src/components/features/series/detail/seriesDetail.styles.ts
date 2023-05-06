import { Colors } from '@/common/styles/colors'
import { breakPoints } from '@/common/styles/media'
import { ElevatedCard } from '@/components/common/customComponent.styles'
import styled from '@emotion/styled'
import { Tag } from 'antd'

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
  margin-top: 1rem;
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
export const Category = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: ${Colors.primary};
  padding-right: 0.5rem;
`

export const PriceWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const Sell = styled.div`
  margin-bottom: 1rem;
`

export const Price = styled.span`
  font-size: 1rem;
  font-weight: bold;
`

export const PostWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`

export const ImageWrapper = styled.div`
  display: flex;
`

export const Image = styled.img`
  width: 20rem;
  height: 15rem;
  margin-bottom: 20px;
  border-radius: 20px 0 0 20px;
`

export const DescriptionWrapper = styled.div`
  padding-left: 25px;
  padding-top: 30px;
`

export const PostCategory = styled.div`
  font-size: 0.5rem;
  font-weight: bold;
  color: ${Colors.primary};
  padding-right: 0.5rem;
  margin-bottom: 0.5rem;
`

export const PostName = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`

export const PostName2 = styled.div`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`

export const PostIntro = styled.div`
  font-size: 12px;
  color: gray;
  margin-bottom: 1.3rem;
`

export const PackTag = styled(Tag)`
  padding: 0.5rem 1rem;
  color: ${Colors.black};
  border-radius: 1.5rem;
  border-color: ${Colors.black};
  background-color: ${Colors.white};
  cursor: pointer;
`

export const TopTag = styled(Tag)`
  padding: 0.02rem 0.5rem;
  color: ${Colors.black};
  border-radius: 1.5rem;
  border-color: ${Colors.primary};
  background-color: ${Colors.muted};
  cursor: pointer;
`
