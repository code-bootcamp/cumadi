import { useQuery } from '@apollo/client'

import LayoutFooterUI from './Footer.presenter'
import { FETCH_POSTS } from './Footer.queries'
import { IQuery, IQueryFetchPostArgs } from '@/common/types/generated/types'

export default function LayoutFooter() {
  // **** PlayGround
  const { data } = useQuery<Pick<IQuery, 'fetchPosts'>, IQueryFetchPostArgs>(FETCH_POSTS)

  return <LayoutFooterUI data={data} />
}
