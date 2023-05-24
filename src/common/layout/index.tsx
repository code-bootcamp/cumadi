import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import React from 'react'
import LayoutHeader from './header/Header.container'
import LayoutFooter from './footer/Footer.container'

const Body = styled.section`
  min-height: 60rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

interface ILayoutProps {
  children: JSX.Element
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter()
  const postId = router.query.postId

  const SHOW_FOOTER = [`/post/${postId}`]

  const isHiddenFooter = SHOW_FOOTER.includes(router.asPath)

  return (
    <>
      <LayoutHeader />
      <Body>{props.children}</Body>
      {isHiddenFooter && <LayoutFooter />}
    </>
  )
}
