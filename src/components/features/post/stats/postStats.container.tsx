import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'

import PostStatsUI from './postStats.presenter'
import { getDate, getToday } from '@/common/libraries/utils'
import { FETCH_POST_VIEW_OF_MINE } from './postStats.queries'
import { IQuery } from '@/common/types/generated/types'
import { IPostStatsProps } from './postStats.types'

export default function PostStats({ postData }: IPostStatsProps) {
  const router = useRouter()
  const postId = String(router.query.postId)
  const startDate = getDate(postData?.fetchPost.createdAt)
  const endDate = getToday()

  // **** PlayGround
  const { data: stateData } = useQuery<Pick<IQuery, 'fetchPostViewOfMine'>>(FETCH_POST_VIEW_OF_MINE, {
    variables: {
      fetchStatisticsInput: {
        postId,
        startDate,
        endDate,
      },
    },
  })

  return <PostStatsUI stateData={stateData} />
}
