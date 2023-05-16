import { Modal } from 'antd'
import { MouseEvent } from 'react'
import { useMutation, useQuery } from '@apollo/client'

import MyMemoUI from './myMemo.presenter'
import { DELETE_POST_MEMO, FETCH_POST_MEMOS } from './myMemo.queries'

export default function MyMemo() {
  // **** PlayGround
  const { data } = useQuery(FETCH_POST_MEMOS)
  const [deletePostMemo] = useMutation(DELETE_POST_MEMO)

  // **** 저장된 메모 단일 삭제
  const onClickDeleteMemo = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      await deletePostMemo({
        variables: {
          memoId: event.currentTarget.id,
        },
        refetchQueries: [{ query: FETCH_POST_MEMOS }],
      })
      Modal.success({ content: '메모가 삭제되었습니다.' })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  // prettier-ignore
  return (
    <MyMemoUI
      data={data}
      onClickDeleteMemo={onClickDeleteMemo}
    />
  )
}
