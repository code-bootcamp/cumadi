import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import PostStats from '@/components/features/post/stats/postStats.container'
import { FETCH_POST } from './index.queries'
import { IQuery, IQueryFetchPostArgs } from '@/common/types/generated/types'

export default function PostStatsPage() {
  const router = useRouter()
  const postId = String(router.query.postId)

  // **** PlayGround
  const { data: postData, loading } = useQuery<Pick<IQuery, 'fetchPost'>, IQueryFetchPostArgs>(FETCH_POST, {
    variables: { postId },
  })

  return loading ? <p>로딩중</p> : <PostStats postData={postData} />
}
