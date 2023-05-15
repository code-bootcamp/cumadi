import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'

import PostQuestionListUI from './postQuestionList.presenter'
import { FETCH_POST_QUESTIONS } from './postQuestionList.queries'

export default function PostQuestionList() {
  const router = useRouter()

  // **** PlayGorund
  const { data } = useQuery(FETCH_POST_QUESTIONS, {
    variables: { useditemId: String(router.query.useditemId) },
  })

  return <PostQuestionListUI />
}
