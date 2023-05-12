import Head from 'next/head'

import * as S from './index.styles'
import PostList from '@/components/features/post/list/postList.container'
import ViewTypesMenu from '@/components/features/viewtypes/viewTypes'

export default function Home() {
  return (
    <>
      <Head>
        <title>커마디</title>
        <meta name="description" content="재밌는 글을 읽고, 쓰고, 돈도 벌고" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <S.Main>
        <PostList />
      </S.Main>
    </>
  )
}
