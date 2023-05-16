import { useQuery } from '@apollo/client'
import { FETCH_POSTS_OF_MINE } from './myPosts.queries'

import MyPostsUI from './myPosts.presenter'

export default function MyPosts() {
  const { data } = useQuery(FETCH_POSTS_OF_MINE)

  return <MyPostsUI data={data} />
}
