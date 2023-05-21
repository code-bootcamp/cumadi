import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'

import PostStatsUI from './postStats.presenter'
import { getDate, getToday } from '@/common/libraries/utils'
import { FETCH_POST, FETCH_POST_VIEW_OF_MINE } from './postStats.queries'

export default function PostStats(props: any) {
  const router = useRouter()
  const postId = String(router.query.postId)

  // **** PlayGround
  const { data } = useQuery(FETCH_POST, { variables: { postId } })
  // const { data: stateData } = useQuery(FETCH_POST_VIEW_OF_MINE, {
  //   variables: {
  //     fetchStatisticsInput: {
  //       postId: data?.fetchPost.postId,
  //       startDate: getDate(data?.fetchPost.createdAt),
  //       endDate: getToday(),
  //     },
  //   },
  // })

  return <PostStatsUI />
}
