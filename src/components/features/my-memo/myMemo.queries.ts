import { gql } from '@apollo/client'

// **** 저장한 메모들 조회
export const FETCH_POST_MEMOS = gql`
  query fetchPostMemos {
    fetchPostMemos {
      memoId
      parse
      createdAt
    }
  }
`

// **** 저장한 메모 삭제
export const DELETE_POST_MEMO = gql`
  mutation deletePostMemo($memoId: String!) {
    deletePostMemo(memoId: $memoId)
  }
`
