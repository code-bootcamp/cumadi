import { Modal } from 'antd'
import { useMutation } from '@apollo/client'
import { ChangeEvent, useState } from 'react'

import PostAnswerWriteUI from './postAnswerWrite.presenter'
import {
  FETCH_POST_QUESTION_ANSWERS,
  CREATE_POST_QUESTION_ANSWER,
  UPDATE_POST_QUESTION_ANSWER,
} from './postAnswerWrite.queries'

export default function PostAnswerWrite(props: any) {
  // **** 상태
  const [contents, setContents] = useState('')

  // **** PlayGround
  // const [createPostQuestionAnswer] = useMutation(CREATE_POST_QUESTION_ANSWER)
  // const [updatePostQuestionAnswer] = useMutation(UPDATE_POST_QUESTION_ANSWER)

  // **** 답변 생성
  const onClickCreateAnswer = async () => {
    try {
      const result = await createPostQuestionAnswer({
        variables: {
          createPostQuestionAnswerInput: {
            contents,
          },
          postQuestionId: props.element._id,
        },
        refetchQueries: [
          {
            query: FETCH_POST_QUESTION_ANSWERS,
            variables: { postQuestionId: props.element._id },
          },
        ],
      })
      setContents('')
      props.setIsReply(false)
      console.log(result)
      Modal.success({ content: '답변 댓글이 등록되었습니다!' })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  // **** 답변 수정
  const onClickUpdateAnswer = async () => {
    try {
      const result1 = await updatePostQuestionAnswer({
        variables: {
          updatePostQuestionAnswerInput: {
            contents,
          },
          postQuestionAnswerId: props.element._id,
        },
        refetchQueries: [
          {
            query: FETCH_POST_QUESTION_ANSWERS,
            variables: { postQuestionId: props.element._id },
          },
        ],
      })
      setContents('')
      console.log(result1)
      Modal.success({ content: '댓글 수정이 완료되었습니다' })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  // **** 답변 댓글 값 전달
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => setContents(event.target.value)

  return (
    <PostAnswerWriteUI
      contents={contents}
      onChangeContents={onChangeContents}
      onClickCreateAnswer={onClickCreateAnswer}
      onClickUpdateAnswer={onClickUpdateAnswer}
    />
  )
}
