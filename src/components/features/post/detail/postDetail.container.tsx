import { Modal } from 'antd'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@apollo/client'

import PostDetailUI from './postDetail.presenter'
import {
  CREATE_POST_MEMO,
  DELETE_POST,
  FETCH_LIKE_COUNT_BY_POST,
  FETCH_POST,
  FETCH_SERIES,
  FETCH_USER_LOGGED_IN,
  TOGGLE_POST_PICK,
} from './postDetail.queries'
import {
  IMutation,
  IMutationDeletePostArgs,
  IQuery,
  IQueryFetchPostArgs,
  IQueryFetchSeriesArgs,
} from '@/common/types/generated/types'
import { FETCH_POSTS } from '../list/postList.queries'

export default function PostDetail() {
  const router = useRouter()
  const postId = String(router.query.postId)

  // **** 상태
  const [dragText, setDragText] = useState<string>('')
  const [isPostInSeriesView, setIsPostInSeriesView] = useState(false)

  // **** PlayGround
  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN)
  const { data } = useQuery<Pick<IQuery, 'fetchPost'>, IQueryFetchPostArgs>(FETCH_POST, { variables: { postId } })
  const { data: likeData } = useQuery(FETCH_LIKE_COUNT_BY_POST, { variables: { postId } })
  const { data: seriesData } = useQuery<Pick<IQuery, 'fetchSeries'>, IQueryFetchSeriesArgs>(FETCH_SERIES, {
    variables: { seriesId: String(data?.fetchPost?.series?.seriesId) },
  })
  // const { data: posts } = useQuery<Pick<IQuery, 'fetchPosts'>, IQueryFetchPostArgs>(FETCH_POSTS)
  const [deletePost] = useMutation<Pick<IMutation, 'deletePost'>, IMutationDeletePostArgs>(DELETE_POST)
  const [togglePostPick] = useMutation(TOGGLE_POST_PICK)
  const [createPostMemo] = useMutation(CREATE_POST_MEMO)

  // **** 포스트 삭제
  const onClickDelete = async () => {
    try {
      await deletePost({
        variables: { postId },
        refetchQueries: [{ query: FETCH_POSTS }],
      })
      Modal.success({ content: '포스트가 삭제되었습니다.' })
      void router.push('/post')
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
      })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  // **** 포스트 메모값 전달 (cf. window.getSelection() : 마우스로 드래그하여 선택한 텍스트를 가져오기)
  const onMouseUpContentMemo = async () => {
    if (!window.getSelection()?.toString().length) return
    const onMousUpText = String(window.getSelection()?.toString())
    console.log(onMousUpText)

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

  const onClickPostInSeriesView = () => setIsPostInSeriesView(prev => !prev)

  return (
    <PostDetailUI
      loginData={loginData}
      likeData={likeData}
      data={data}
      seriesData={seriesData}
      isPostInSeriesView={isPostInSeriesView}
      onClickDelete={onClickDelete}
      onMouseUpContentMemo={onMouseUpContentMemo}
      onClickMemoSave={onClickMemoSave}
      onClickPick={onClickPick}
      onClickPostInSeriesView={onClickPostInSeriesView}
    />
  )
}
