import { useQuery } from '@apollo/client'

import MyPostsUI from './myPosts.presenter'
import { FETCH_POSTS_OF_MINE } from './myPosts.queries'
import { IQuery, IQueryFetchPostArgs } from '@/common/types/generated/types'

export default function MyPosts() {
  const { data } = useQuery<Pick<IQuery, 'fetchPostsOfMine'>, IQueryFetchPostArgs>(FETCH_POSTS_OF_MINE)

  return <MyPostsUI data={data} />
}
