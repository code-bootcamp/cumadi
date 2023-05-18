import { Modal } from 'antd'
import { useState } from 'react'
import PostDetailUI from './postDetail.presenter'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@apollo/client'

import {
  CREATE_POST_MEMO,
  DELETE_POST,
  FETCH_LIKE_COUNT_BY_POST,
  FETCH_POST,
  FETCH_POST2,
  FETCH_USER_LOGGED_IN,
  TOGGLE_POST_PICK,
} from './postDetail.queries'

export default function PostDetail() {
  const router = useRouter()
  const postId = String(router.query.postId)

  // **** 상태
  const [dragText, setDragText] = useState<string>('')

  // **** PlayGround
  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN)
  const { data: likeData } = useQuery(FETCH_LIKE_COUNT_BY_POST, {
    variables: { postId },
  })
  const { data } = useQuery(FETCH_POST, {
    variables: { postId },
  })
  const [deletePost] = useMutation(DELETE_POST)
  const [togglePostPick] = useMutation(TOGGLE_POST_PICK)
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
        // ** 응답을 받고난 후 받아온 응답을 다시 fetch -> 느리고 비효율적
        refetchQueries: [
          {
            query: FETCH_LIKE_COUNT_BY_POST,
            variables: { postId },
          },
        ],
        // ** 옵티미스틱 UI
        // optimisticResponse: {
        //   togglePostPick: (likeData?.fetchLikeCountByPost ?? 0) + 1,
        // },
        // ** apollo 캐시를 직접 수정
        // update(cache, { data }) {
        //   cache.writeQuery({
        //     query: FETCH_LIKE_COUNT_BY_POST,
        //     variables: { postId },
        //     data: {
        //       fetchLikeCountByPost: data?.togglePostPick,
        //     },
        //   })
        // },
      })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
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
      likeData={likeData}
      data={data}
      onClickDelete={onClickDelete}
      onMouseUpContentMemo={onMouseUpContentMemo}
      onClickMemoSave={onClickMemoSave}
      onClickPick={onClickPick}
    />
  )
}
