import React from 'react'
import * as S from './Header.styles'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import BasicButton from '@/components/common/buttons/basic'
import { useRecoilState } from 'recoil'
import { checkLoginState } from '@/common/store'

export default function LayoutHeaderUI() {
  const { onClickMoveToPage } = useMoveToPage()
  const [checkLogin, _] = useRecoilState(checkLoginState)

  // prettier-ignore
  return (
    <S.Header>
      <S.Container>
        <S.Logo src="/images/Logo.svg" onClick={onClickMoveToPage('/')} />
        <S.LoginMenu>
        {/* <BasicButton movePage={'/login'} name={'로그인'} type="primary" /> */}
          {checkLogin ? <BasicButton movePage={'/my'} name={'마이페이지'} /> : ''}
          {checkLogin ? '' : <BasicButton movePage={`/signup`} name={'회원가입'} />}
          {checkLogin ? <BasicButton movePage={'/'} name={'로그아웃'} /> : <BasicButton movePage={'/login'} name={'로그인'} type="primary" />}
          {checkLogin ? '' : <BasicButton movePage={`/post/new`} name={'새 포스트 작성하기'}  type="primary"/>}
        </S.LoginMenu>
      </S.Container>
    </S.Header>
  )
}
