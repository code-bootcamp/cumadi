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

  useEffect(() => {
    // Perform localStorage action
    const savedLocalTexts = JSON.parse(localStorage?.getItem('savedTexts') || '[]')
    setSavedTextsHighlight(savedLocalTexts)
  }, [])
  // console.log(savedLocalTexts)

  return <MyHighlightUI savedTextsHighlight={savedTextsHighlight} handleClearSavedText={handleClearSavedText} />
}
