import { useEffect } from 'react'
import { Avatar } from 'antd'
import * as S from './Header.styles'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import BasicButton from '@/components/common/buttons/basic'
import { MyButton } from '@/components/common/customComponent.styles'
import { ILayoutHeaderUIProps } from './Header.types'
import { PlusOutlined, UserOutlined } from '@ant-design/icons'

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  const { onClickMoveToPage } = useMoveToPage()

  // **** 스크롤이 발생할 때마다 handleScroll함수를 실행, 끝나면 리턴해주며 클린업 반복
  useEffect(() => {
    window.addEventListener('scroll', props.handleScroll)
    return () => {
      window.removeEventListener('scroll', props.handleScroll)
    }
  }, [])

  // prettier-ignore
  return (
    <S.Header>
      {props.isVisible && <S.Container>
        <S.Logo src="/images/Logo.svg" onClick={onClickMoveToPage('/')} />
        <S.LoginMenu>
          {props.loginData ? (
            <>
              <img src='/images/shopping-cart.svg' onClick={onClickMoveToPage('/cart')}/>
              <BasicButton movePage={'/my'} icon={<Avatar src={props.loginData?.fetchUserLoggedIn.image}  icon={<UserOutlined />}/>}/>
              <BasicButton movePage={`/post/new`} name={'새 포스트 작성하기'}  type="primary" icon={<PlusOutlined />}/>
              <MyButton  onClick={props.onClickLogout}>로그아웃</MyButton>
            </>
          ) : (
            <>
              <BasicButton movePage={`/signup`} name={'회원가입'} />
              <BasicButton movePage={'/login'} name={'로그인'} type="primary" />
            </>
          )}
        </S.LoginMenu>
      </S.Container>}
      
    </S.Header>
  )
}
