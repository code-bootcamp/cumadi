import { Modal } from 'antd'
import { useState } from 'react'
import PostDetailUI from './postDetail.presenter'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { useMutation, useQuery } from '@apollo/client'

import { memoPostDetail } from '@/common/store'
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
  const [dragText, setDragText] = useState<string | undefined>('') // 드래그한 값
  const [savedTexts, setSavedTexts] = useRecoilState(memoPostDetail) // 드래그한 거 저장

  // **** PlayGround
  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN)
  const { data } = useQuery(FETCH_POST, {
    variables: { postId },
  })
  const [deletePost] = useMutation(DELETE_POST)
  // const [togglePostPick] = useMutation(TOGGLE_POST_PICK)
  const [createPostMemo] = useMutation(CREATE_POST_MEMO)

  // **** 상품 삭제
  const onClickDelete = async () => {
    try {
      await deletePost({
        variables: { postId },
      })
      Modal.success({ content: '포스트가 삭제되었습니다.' })
      void router.push('/my/posts')
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  // **** 상품 찜등록
  // const onClickPick = async () => {
  //   try {
  //     await togglePostPick({
  //       variables: {
  //         postId,
  //       },
  //       // ** 옵티미스틱 UI -> 캐시를 바꾸고 캐시값을 받아오는걸 기다리지 않고 바로 바꿔줌
  //       optimisticResponse: {
  //         pickedCount: (data?.fetchPost.pickedCount ?? 0) + 1,
  //       },
  //       // ** apollo 캐시를 직접 수정을 할 수 있었습니다.(백엔드 캐시가 아닙니다.) -> 느리지만 효율적
  //       // ** (백엔드에 요청은 안하지만, 받아올때까지 기다려줘야 함)
  //       update(cache, { data }) {
  //         // 이전 시간에는 modify를 사용했지만, 오늘은 writeQuery를 사용해보겠습니다.
  //         cache.writeQuery({
  //           query: FETCH_POST2,
  //           variables: { postId },
  //           // 어떻게 수정할 것인지는 아래에 적어줍니다.
  //           data: {
  //             // 기존값과 똑같이 받아오셔야 합니다.
  //             fetchPost: {
  //               _id: data?._id,
  //               __typename: data?.__typename,
  //               pickedCount: data?.pickedCount,
  //             },
  //           },
  //         })
  //       },
  //     })
  //     // Modal.success({ content: '상품찜 성공했습니다!' })
  //   } catch (error) {
  //     if (error instanceof Error) Modal.error({ content: '로그인을 먼저해주세요.' })
  //   }
  // }

  // **** 포스트 메모 생성
  // **** onMouseUp 이벤트 헨들러로 드래그한 텍스트를 dragText 상태에 저장
  // window.getSelection() : 마우스로 드래그하여 선택한 텍스트를 가져오기
  const onMouseUpContentMemo = async () => {
    if (!window.getSelection()?.toString().length) return
    const selectedText = String(window.getSelection()?.toString())
    const savedText = String(prompt('저장하시겠나요?', selectedText))
    console.log(selectedText)

    // if (selectedText?.length !== 0) {
    //   let savedText: any = prompt('저장하시겠나요?', selectedText)
    //   setDragText(selectedText)
    // }

    // try {
    //   const result = await createPostMemo({
    //     variables: {
    //       parse: { savedText },
    //     },
    //   })
    //   console.log(result)
    //   Modal.success({ content: '상품등록이 완료되었습니다!' })
    //   // void router.push(`/my/${result.data?.createUseditem._id}`)
    // } catch (error) {
    //   if (error instanceof Error) Modal.error({ content: error.message })
    // }
  }

  // **** localStorage.setItem로 드래그한 텍스트 저장
  const handleSaveText = () => {
    const savedTexts = JSON.parse(localStorage.getItem('savedTexts') || '[]')
    savedTexts.push(dragText)
    localStorage.setItem('savedTexts', JSON.stringify(savedTexts))
    setSavedTexts(savedTexts)
  }

  return (
    <PostDetailUI
      loginData={loginData}
      data={data}
      onClickDelete={onClickDelete}
      onMouseUpContentMemo={onMouseUpContentMemo}
      // onClickPick={onClickPick}
      // handleSaveText={handleSaveText}
    />
  )
}
