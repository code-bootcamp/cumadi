import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import PostStats from '@/components/features/post/stats/postStats.container'
import { FETCH_POST } from './index.queries'

export default function PostStatsPage() {
  const router = useRouter()
  const postId = String(router.query.postId)

  // **** PlayGround
  const { data, loading } = useQuery(FETCH_POST, { variables: { postId } })

  return loading ? <p>로딩중</p> : <PostStats data={data} />
}
