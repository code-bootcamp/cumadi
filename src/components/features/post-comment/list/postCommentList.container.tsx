import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'

import PostCommentListUI from './postCommentList.presenter'
import { FETCH_POST_COMMENTS } from './postCommentList.queries'
import { IQuery, IQueryFetchPostCommentsArgs } from '@/common/types/generated/types'

export default function PostCommentList() {
  const router = useRouter()
  const postId = String(router.query.postId)

  // **** PlayGorund
  const { data: commentsData, fetchMore } = useQuery<Pick<IQuery, 'fetchPostComments'>, IQueryFetchPostCommentsArgs>(
    FETCH_POST_COMMENTS,
    {
      variables: { postId },
    },
  )

  // **** 무한스크롤
  // const loadComment = () => {
  //   if (!data) return
  //   fetchMore({
  //     variables: {
  //       page: Math.ceil(data.fetchUseditemQuestions.length / 10) + 1,
  //     },
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       if (!fetchMoreResult.fetchUseditemQuestions) return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] }
  //       return {
  //         fetchUseditemQuestions: [...prev.fetchUseditemQuestions, ...fetchMoreResult?.fetchUseditemQuestions],
  //       }
  //     },
  //   })
  // }

  return <PostCommentListUI commentsData={commentsData} />
}
