import { useState } from 'react'
import { useQuery } from '@apollo/client'

import PostListUI from './postList.presenter'
import { FETCH_POSTS } from './postList.queries'

export default function PostList() {
  // **** 상태
  const [keyword, setKeyword] = useState('')

  // **** PlayGround
  const { data, fetchMore } = useQuery(FETCH_POSTS)

  return <PostListUI data={data} />
}
