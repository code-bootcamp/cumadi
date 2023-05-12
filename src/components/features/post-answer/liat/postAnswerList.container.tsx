import { useQuery } from '@apollo/client'

import PostAnswerListUI from './postAnswerList.presenter'
import { FETCH_POST_QUESTION_ANSWERS } from './postAnswerList.queries'

export default function PostAnswerList(props: any) {
  // const { data } = useQuery(FETCH_POST_QUESTION_ANSWERS, {
  //   variables: {
  //     postQuestionId: props.element?._id,
  //   },
  // })

  return <PostAnswerListUI />
}
