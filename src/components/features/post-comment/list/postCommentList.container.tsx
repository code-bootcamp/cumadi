import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'

import PostCommentListUI from './postCommentList.presenter'
import { FETCH_POST_COMMENTS } from './postCommentList.queries'
import { IQuery, IQueryFetchPostCommentsArgs } from '@/common/types/generated/types'

export default function PostCommentList() {
  const router = useRouter()
  const postId = String(router.query.postId)

  // **** PlayGorund
  const { data } = useQuery<Pick<IQuery, 'fetchPostComments'>, IQueryFetchPostCommentsArgs>(FETCH_POST_COMMENTS, {
    variables: { postId },
  })

  return <PostCommentListUI data={data} />
}
