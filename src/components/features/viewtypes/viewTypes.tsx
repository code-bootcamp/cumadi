import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import * as S from './viewTypes.styles'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { MyTag } from '@/components/common/customComponent.styles'

export default function ViewTypesMenu(props: any) {
  const router = useRouter()

  const handleClickMenu = (value: any) => () => {
    router.push(value);
  }

  return (
    <>
        <S.TitleWrapper>
          <S.Title>내 맘대로. 내 입맛대로.</S.Title>
          <div>검색창</div>
          <S.TagWrapper>
            <MyTag isChecked={true} onClick={handleClickMenu('./')}>
              포스트
            </MyTag>
            <MyTag isChecked={false} onClick={handleClickMenu('./series')}>
              시리즈
            </MyTag>
          </S.TagWrapper>
          <S.TagWrapper>
            <MyTag isChecked={true}>전체</MyTag>
            <MyTag isChecked={false}>개발</MyTag>
            <MyTag isChecked={false}>에세이</MyTag>
            <MyTag isChecked={false}>독서</MyTag>
          </S.TagWrapper>
        </S.TitleWrapper>
    </>
  )
}