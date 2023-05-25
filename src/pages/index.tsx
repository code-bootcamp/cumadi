import Head from 'next/head'

import * as S from '../components/features/signup/index.styles'
import { DotLeft, MyButton } from '@/components/common/customComponent.styles'
import PostList from '@/components/features/post/list/postList.container'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'

export default function Home() {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <>
      <Head>
        <title>커마디</title>
        <meta name="description" content="재밌는 글을 읽고, 쓰고, 돈도 벌고" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <S.Main>
        <S.TitleWrapper>
          <S.Title>내 맘대로. 내 입맛대로.</S.Title>
          <S.TagWrapper>
            <MyButton type="primary" onClick={onClickMoveToPage('./')}>
              포스트
            </MyButton>
            <MyButton type="text" onClick={onClickMoveToPage('./series')}>
              시리즈
            </MyButton>
          </S.TagWrapper>
        </S.TitleWrapper>
        {<PostList />}
        <DotLeft />
      </S.Main>
    </>
  )
}
