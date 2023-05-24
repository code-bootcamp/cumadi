import { useQuery } from '@apollo/client'

import PostListUI from './postList.presenter'
import { FETCH_POSTS } from './postList.queries'
import { IQuery, IQueryFetchPostArgs } from '@/common/types/generated/types'

export default function PostList() {
  // **** PlayGround
  const { data, fetchMore } = useQuery<Pick<IQuery, 'fetchPosts'>, IQueryFetchPostArgs>(FETCH_POSTS)

  return <PostListUI data={data} />
}
