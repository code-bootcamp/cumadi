import { useQuery } from '@apollo/client'

import LayoutFooterUI from './Footer.presenter'
import { FETCH_POSTS } from './Footer.queries'

export default function LayoutFooter() {
  // **** PlayGround
  const { data } = useQuery(FETCH_POSTS)

  return <LayoutFooterUI data={data} />
}
