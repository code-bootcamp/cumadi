import React from 'react'
import * as S from './Header.styles'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import BasicButton from '@/components/common/buttons/basic'

export default function LayoutHeaderUI() {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.Header>
      <S.Container>
        <S.Logo src="/Logo.png" onClick={onClickMoveToPage('/')} />
        <S.LoginMenu>
          <BasicButton movePage={`/signup`} name={'회원가입'} />
          <BasicButton movePage={'/login'} name={'로그인'} isMain={true} />
        </S.LoginMenu>
      </S.Container>
    </S.Header>
  )
}
