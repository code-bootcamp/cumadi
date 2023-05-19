import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import { ChangeEvent, useState } from 'react'
import { Modal } from 'antd'

import PostCommentWriteUI from './postCommentWrite.presenter'
import { CREATE_POST_COMMENT, FETCH_POST_COMMENTS, UPDATE_POST_QUESTION } from './postCommentWrite.queries'

export default function PostCommentWrite(props: any) {
  const router = useRouter()
  const postId = String(router.query.postId)

  // **** 상태
  const [content, setContent] = useState('')

  // **** Playground
  const [createPostComment] = useMutation(CREATE_POST_COMMENT)
  // const [updatePostQuestion] = useMutation(UPDATE_POST_QUESTION)

  // **** 포스트 질문 댓글 작성
  const onClickCreateComment = async () => {
    try {
      await createPostComment({
        variables: {
          postId,
          content,
        },
        refetchQueries: [
          {
            query: FETCH_POST_COMMENTS,
            variables: { postId },
          },
        ],
      })
      Modal.success({ content: '댓글이 등록되었습니다!' })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
    // ** 질문댓글 등록하고 내용 초기화
    setContent('')
  }

  // **** 포스트 질문 댓글 수정
  // const onClickUpdateQuestion = async () => {
  //   if (!content) {
  //     alert('내용이 수정되지 않았습니다.')
  //     return
  //   }

  //   try {
  //     // 빈 객체를 생성 후, 필수값은 미리 넣어놓고, 그외 값들은 값이 있을 때만 백엔드에 전송
  //     // const updatePostQuestionInput = {}
  //     // // 값이 있다면, 해당 객체 속성을 추가
  //     // if (contents) updatePostQuestionInput.contents = contents
  //     // if (typeof props.element?._id !== 'string') return

  //     await updatePostQuestion({
  //       variables: {
  //         postQuestionId: props.element?._id,
  //         updatePostQuestionInput: {
  //           contents: content,
  //         },
  //       },
  //       refetchQueries: [
  //         {
  //           query: FETCH_POST_QUESTIONS,
  //           variables: { useditemQuestionId: props.element?._id },
  //         },
  //       ],
  //     })

  //     // ** 함수, 배열도 옵셔널체이닝 가능
  //     // 수정하기 버튼을 클릭할 떄, 수정이 완료되면, 수정여부를 false로
  //     // props.setIsEdit?.(false)
  //   } catch (error) {
  //     if (error instanceof Error) Modal.error({ content: error.message })
  //   }
  // }

  // **** 질문 댓글 값 전달
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => setContent(event.target.value)

  return (
    <PostCommentWriteUI
      onChangeContents={onChangeContents}
      onClickCreateComment={onClickCreateComment}
      // contents={contents}
      // isEdit={props.isEdit}
      // element={props.element}
      // onChangeContents={onChangeContents}
      // onClickCreateQuestion={onClickCreateQuestion}
      // onClickUpdateQuestion={onClickUpdateQuestion}
    />
  )
}
