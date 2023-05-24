import { useEffect } from 'react'
import { Avatar, Dropdown } from 'antd'
import type { MenuProps } from 'antd'
import * as S from './Header.styles'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import BasicButton from '@/components/common/buttons/basic'
import { MyButton } from '@/components/common/customComponent.styles'
import { ILayoutHeaderUIProps } from './Header.types'
import {
  ReadOutlined,
  DownOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  FileTextOutlined,
} from '@ant-design/icons'
import { useRouter } from 'next/router'

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  const router = useRouter()
  const { onClickMoveToPage } = useMoveToPage()

  // **** 스크롤이 발생할 때마다 handleScroll함수를 실행, 끝나면 리턴해주며 클린업 반복
  useEffect(() => {
    window.addEventListener('scroll', props.handleScroll)
    return () => {
      window.removeEventListener('scroll', props.handleScroll)
    }
  }, [])

  const items: MenuProps['items'] = [
    {
      key: 'post',
      label: (
        <span>
          <FileTextOutlined />
          <span style={{ marginRight: '.5rem' }}></span>새 포스트
        </span>
      ),
    },
    {
      key: 'series',
      label: (
        <span>
          <ReadOutlined />
          <span style={{ marginRight: '.5rem' }}></span>새 시리즈
        </span>
      ),
    },
  ]

  const handleMenuClick: MenuProps['onClick'] = e => {
    router.push(`/${e.key}/new`)
  }

  const menuProps = {
    items,
    onClick: handleMenuClick,
  }

  // prettier-ignore
  return (
    <S.Header>
      {props.isVisible && <S.Container>
        <S.Logo src="/images/Logo.svg" onClick={onClickMoveToPage('/')} />
        <S.LoginMenu>
          {props.loginData ? (
            <>
              <MyButton icon={<ShoppingCartOutlined />} onClick={onClickMoveToPage('/cart')}/>
              <BasicButton movePage={'/my'} icon={<UserOutlined />}/>
              <MyButton  onClick={props.onClickLogout}>로그아웃</MyButton>
              <Dropdown menu={menuProps}>
                <MyButton type='primary' icon={<PlusOutlined />}>
                    추가하기
                    <DownOutlined />
                </MyButton>
              </Dropdown>
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
