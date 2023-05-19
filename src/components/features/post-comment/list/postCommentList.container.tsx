import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'

import PostCommentListUI from './postCommentList.presenter'
import { FETCH_POST_COMMENTS } from './postCommentList.queries'

export default function PostCommentList() {
  const router = useRouter()

  // **** PlayGorund
  const { data } = useQuery(FETCH_POST_COMMENTS, {
    variables: { postId: String(router.query.postId) },
  })

  return <PostCommentListUI data={data} />
}
