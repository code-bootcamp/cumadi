import { gql } from '@apollo/client'

// 내가 작성한 포스트들 조회
export const FETCH_POSTS_OF_MINE = gql`
  query fetchPostsOfMine {
    fetchPostsOfMine {
      postId
      title
      content
      image
      user {
        userId
        nickname
      }
      series {
        seriesId
        title
      }
    }
  }
`
