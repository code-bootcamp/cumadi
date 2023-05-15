import { MouseEvent, useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'

import MyMemoUI from './myMemo.presenter'
import { DELETE_POST_MEMO, FETCH_POST_MEMOS } from './myMemo.queries'

export default function MyMemo() {
  // **** PlayGround
  const { data } = useQuery(FETCH_POST_MEMOS)
  // const { deletePostMemo } = useMutation(DELETE_POST_MEMO)

  // **** 저장된 메모 단일 삭제
  // const onClickDeleteMemo = async (event: MouseEvent<HTMLButtonElement>) => {
  //   await deletePostMemo({
  //     variables: { memoId: event.currentTarget.id },
  //     // **** refetchQueries : 삭제 후 바로 화면에 반영하기 위해 다시 최근 10개를 fetch 요청
  //     // refetchQueries: [{ query: FETCH_POST_MEMOS }],
  //   })
  //   alert('삭제가 완료되었습니다.')
  // }

  return (
    <MyMemoUI
      data={data}
      // onClickDeleteMemo={onClickDeleteMemo}
    />
  )
}
