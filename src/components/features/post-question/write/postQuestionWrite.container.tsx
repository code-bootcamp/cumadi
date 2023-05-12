import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import { ChangeEvent, useState } from 'react'
import { Modal } from 'antd'

import PostQuestionWriteUI from './postQuestionWrite.presenter'
import { CREATE_POST_QUESTION, FETCH_POST_QUESTIONS, UPDATE_POST_QUESTION } from './postQuestionWrite.queries'
import { IPostQuestionWriteProps, IUpdatePostQuestionInput } from './postQuestionWrite.types'

export default function PostQuestionWrite(props: IPostQuestionWriteProps) {
  const router = useRouter()
  const postId = String(router.query.postId)

  // **** 상태
  const [contents, setContents] = useState('')

  // **** Playground
  // const [createPostQuestion] = useMutation(CREATE_POST_QUESTION)
  // const [updatePostQuestion] = useMutation(UPDATE_POST_QUESTION)

  // **** 포스트 질문 댓글 작성
  const onClickCreateQuestion = async () => {
    try {
      await createPostQuestion({
        variables: {
          postId,
          createUseditemQuestionInput: {
            contents,
          },
        },
        // ** refetchQueries : 등록 후 바로 화면에 반영하기 위해 다시 최근 10개를 fetch 요청
        refetchQueries: [
          {
            query: FETCH_POST_QUESTIONS,
            variables: { postId },
          },
        ],
      })
      Modal.success({ content: '질문 댓글을 성공적으로 등록되었습니다!' })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
    // ** 질문댓글 등록하고 내용 초기화
    setContents('')
  }

  // **** 포스트 질문 댓글 수정
  const onClickUpdateQuestion = async () => {
    if (!contents) {
      alert('내용이 수정되지 않았습니다.')
      return
    }

    try {
      // 빈 객체를 생성 후, 필수값은 미리 넣어놓고, 그외 값들은 값이 있을 때만 백엔드에 전송
      const updatePostQuestionInput: IUpdatePostQuestionInput = {}
      // 값이 있다면, 해당 객체 속성을 추가
      if (contents) updatePostQuestionInput.contents = contents
      if (typeof props.element?._id !== 'string') return

      await updatePostQuestion({
        variables: {
          postQuestionId: props.element?._id,
          updatePostQuestionInput: {
            contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_POST_QUESTIONS,
            variables: { useditemQuestionId: props.element?._id },
          },
        ],
      })

      // ** 함수, 배열도 옵셔널체이닝 가능
      // 수정하기 버튼을 클릭할 떄, 수정이 완료되면, 수정여부를 false로
      // props.setIsEdit?.(false)
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  // **** 질문 댓글 값 전달
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => setContents(event.target.value)

  return (
    <PostQuestionWriteUI
    // contents={contents}
    // isEdit={props.isEdit}
    // element={props.element}
    // onChangeContents={onChangeContents}
    // onClickCreateQuestion={onClickCreateQuestion}
    // onClickUpdateQuestion={onClickUpdateQuestion}
    />
  )
}
