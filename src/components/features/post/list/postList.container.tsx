import { useState } from 'react'
import { useQuery } from '@apollo/client'

import PostListUI from './postList.presenter'
import { FETCH_POSTS } from './postList.queries'
import { IQuery, IQueryFetchPostArgs } from '@/common/types/generated/types'

export default function PostList() {
  // **** 상태
  const [keyword, setKeyword] = useState('')

  // **** PlayGround
  const { data, fetchMore } = useQuery<Pick<IQuery, 'fetchPosts'>, IQueryFetchPostArgs>(FETCH_POSTS)

  // **** 포스트 무한스크롤
  // const onLoadMore = () => {
  //   if (!data) return

  //   void fetchMore({
  //     variables: { page: Math.ceil(data?.fetchPosts.length / 7) + 1 },
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       if (!fetchMoreResult?.fetchPosts) return { fetchPosts: [...prev.fetchPosts] }
  //       return {
  //         fetchPosts: [...prev.fetchPosts, ...fetchMoreResult.fetchPosts],
  //       }
  //     },
  //   })
  // }

  return <PostListUI data={data} />
}
