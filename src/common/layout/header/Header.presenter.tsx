import React from 'react'
import * as S from './Header.styles'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import BasicButton from '@/components/common/buttons/basic'
import { useRecoilState } from 'recoil'
import { checkLoginState } from '@/common/store'

export default function LayoutHeaderUI() {
  const { onClickMoveToPage } = useMoveToPage()
  const [checkLogin] = useRecoilState(checkLoginState)
  const onClickLogout = () => {}

  return (
    <S.Header>
      <S.Container>
        <S.Logo src="/images/Logo.svg" onClick={onClickMoveToPage('/')} />
        <S.LoginMenu>
          {checkLogin ? (
            <>
              <BasicButton movePage={'/my'} name={'마이페이지'} />
              <BasicButton movePage={'/'} name={'로그아웃'} type="primary" onClick={onClickLogout} />
            </>
          ) : (
            <>
              <BasicButton movePage={`/signup`} name={'회원가입'} />
              <BasicButton movePage={'/login'} name={'로그인'} type="primary" />
            </>
          )}
        </S.LoginMenu>
      </S.Container>
    </S.Header>
  )
}
