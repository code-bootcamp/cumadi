import { useQuery } from '@apollo/client'

import MyPostsUI from './myPosts.presenter'
import { FETCH_POSTS_OF_MINE } from './myPosts.queries'
import { IQuery, IQueryFetchPostArgs } from '@/common/types/generated/types'
import { FETCH_USER_LOGGED_IN } from '@/common/layout/header/Header.queries'

export default function MyPosts() {
  const { data } = useQuery<Pick<IQuery, 'fetchPostsOfMine'>, IQueryFetchPostArgs>(FETCH_POSTS_OF_MINE)
  const { data: loginData } = useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN)
  return <MyPostsUI data={data} loginData={loginData} />
}
