import React, { useEffect, useState } from 'react'
import PostDetailUI from './postDetail.presenter'
import { useRecoilState } from 'recoil'
import { memoPostDetail } from '@/common/store'

export default function PostDetail() {
  // **** 상태
  const [dragText, setDragText] = useState<string | undefined>('') // 드래그한 값
  const [savedTexts, setSavedTexts] = useRecoilState(memoPostDetail) // 드래그한 거 저장

  // **** onMouseUp 이벤트 헨들러로 드래그한 텍스트를 dragText 상태에 저장
  // window.getSelection() : 마우스로 드래그하여 선택한 텍스트를 가져오기
  const onMouseUpContents = () => {
    const selectedText = window.getSelection()?.toString()
    if (selectedText?.length !== 0) {
      // let savedText: any = prompt('저장하시겠나요?', selectedText)
      setDragText(selectedText)
    }
  }
  // console.log('==========포스트 상세 드래그 한 것들==========')
  // console.log(dragText)

  // **** localStorage.setItem로 드래그한 텍스트 저장
  const handleSaveText = () => {
    const savedTexts = JSON.parse(localStorage.getItem('savedTexts') || '[]')
    savedTexts.push(dragText)
    localStorage.setItem('savedTexts', JSON.stringify(savedTexts))
    setSavedTexts(savedTexts)
  }

  return <PostDetailUI onMouseUpContents={onMouseUpContents} handleSaveText={handleSaveText} />
}
