import { Modal } from 'antd'
import { useState } from 'react'
import PostDetailUI from './postDetail.presenter'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@apollo/client'

import {
  CREATE_POST_MEMO,
  DELETE_POST,
  FETCH_POST,
  FETCH_POST2,
  FETCH_USER_LOGGED_IN,
  TOGGLE_POST_PICK,
} from './postDetail.queries'

export default function PostDetail() {
  const router = useRouter()
  const postId = String(router.query.postId)

  // **** 상태
  const [dragText, setDragText] = useState<string>('') // 드래그한 값

  // **** PlayGround
  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN)
  const { data } = useQuery(FETCH_POST, {
    variables: { postId },
  })
  const [deletePost] = useMutation(DELETE_POST)
  // const [togglePostPick] = useMutation(TOGGLE_POST_PICK)
  const [createPostMemo] = useMutation(CREATE_POST_MEMO)

  // **** 포스트 삭제
  const onClickDelete = async () => {
    try {
      await deletePost({
        variables: { postId },
        refetchQueries: [{ query: FETCH_POST }],
      })
      Modal.success({ content: '포스트가 삭제되었습니다.' })
      void router.push('/my/posts')
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  // **** 상품 찜등록
  const onClickPick = async () => {
    try {
      await togglePostPick({
        variables: {
          postId,
        },
        // ** 옵티미스틱 UI -> 캐시를 바꾸고 캐시값을 받아오는걸 기다리지 않고 바로 바꿔줌
        optimisticResponse: {
          pickedCount: (data?.fetchPost.pickedCount ?? 0) + 1,
        },
        // ** apollo 캐시를 직접 수정을 할 수 있었습니다.(백엔드 캐시가 아닙니다.) -> 느리지만 효율적
        // ** (백엔드에 요청은 안하지만, 받아올때까지 기다려줘야 함)
        update(cache, { data }) {
          // 이전 시간에는 modify를 사용했지만, 오늘은 writeQuery를 사용해보겠습니다.
          cache.writeQuery({
            query: FETCH_POST2,
            variables: { postId },
            // 어떻게 수정할 것인지는 아래에 적어줍니다.
            data: {
              // 기존값과 똑같이 받아오셔야 합니다.
              fetchPost: {
                _id: data?._id,
                __typename: data?.__typename,
                pickedCount: data?.pickedCount,
              },
            },
          })
        },
      })
      // Modal.success({ content: '상품찜 성공했습니다!' })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: '로그인을 먼저해주세요.' })
    }
  }

  // **** 포스트 메모값 전달 (cf. window.getSelection() : 마우스로 드래그하여 선택한 텍스트를 가져오기)
  const onMouseUpContentMemo = async () => {
    if (!window.getSelection()?.toString().length) return
    const onMousUpText = String(window.getSelection()?.toString())
    setDragText(onMousUpText)
  }

  // **** 포스트 메모값 저장
  const onClickMemoSave = async () => {
    try {
      await createPostMemo({
        variables: {
          postId,
          parse: String(dragText),
        },
      })
      Modal.success({ content: '메모 저장이 완료되었습니다!' })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return (
    <PostDetailUI
      loginData={loginData}
      data={data}
      onClickDelete={onClickDelete}
      onMouseUpContentMemo={onMouseUpContentMemo}
      onClickMemoSave={onClickMemoSave}
      // onClickPick={onClickPick}
      // handleSaveText={handleSaveText}
    />
  )
}
