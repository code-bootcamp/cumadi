import { useEffect, useState } from 'react'
import MyHighlightUI from './myHighlight.presenter'
import { useRecoilState } from 'recoil'
import { memoPostDetail } from '@/common/store'

export default function MyHighlight() {
  const [savedTexts, setSavedTexts] = useRecoilState(memoPostDetail)
  const [savedTextsHighlight, setSavedTextsHighlight] = useState([])

  // **** localStorage 저장된 메모 전체 삭제
  const handleClearSavedText = () => {
    localStorage.removeItem('savedTexts')
    setSavedTexts([])
  }

  // **** 저장된 메모 단일 삭제
  const onClickDeleteMemo = (event: any) => {}

  useEffect(() => {
    const savedLocalTexts = JSON.parse(localStorage?.getItem('savedTexts') || '[]')
    setSavedTextsHighlight(savedLocalTexts)
  }, [])

  return (
    <MyHighlightUI
      savedTextsHighlight={savedTextsHighlight}
      handleClearSavedText={handleClearSavedText}
      onClickDeleteMemo={onClickDeleteMemo}
    />
  )
}
