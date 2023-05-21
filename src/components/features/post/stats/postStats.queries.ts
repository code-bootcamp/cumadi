import { gql } from '@apollo/client'

// **** 포스트 조회
export const FETCH_POST = gql`
  query fetchPost($postId: String!) {
    fetchPost(postId: $postId) {
      postId
      title
      content
      user {
        userId
        nickname
      }
      tags {
        tagId
        name
      }
      series {
        seriesId
        title
        introduction
      }
      createdAt
    }
  }
`

// 포스트별 일일 조회수 통계 조회
export const FETCH_POST_VIEW_OF_MINE = gql`
  query fetchPostViewOfMine($fetchStatisticsInput: FetchStatisticsInput!) {
    fetchPostViewOfMine(fetchStatisticsInput: $fetchStatisticsInput) {
      postId
      title
      content
      statisticId
      date
      view
      post {
        postId
        title
        content
      }
    }
  }
`
