import { useQuery } from '@apollo/client'

import MyPostsUI from './myPosts.presenter'
import { FETCH_POSTS_OF_MINE } from './myPosts.queries'

export default function MyPosts() {
  const { data, refetch } = useQuery(FETCH_POSTS_OF_MINE)

  return <MyPostsUI data={data} />
}
