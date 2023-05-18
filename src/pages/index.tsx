import Head from 'next/head'
import { useQuery } from '@apollo/client'

import * as S from './index.styles'
import { MyTag } from '@/components/common/customComponent.styles'
import PostList from '@/components/features/post/list/postList.container'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import { FETCH_SERIES_CATEGORIES } from './index.queries'

export default function Home() {
  const { onClickMoveToPage } = useMoveToPage()
  const { data: categories } = useQuery(FETCH_SERIES_CATEGORIES)

  return (
    <>
      <Head>
        <title>커마디</title>
        <meta name="description" content="재밌는 글을 읽고, 쓰고, 돈도 벌고" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      {/* TODO: Add PostsList inside body/main */}
      <S.Main>
        <S.TitleWrapper>
          <S.Title>내 맘대로. 내 입맛대로.</S.Title>
          <div>검색창</div>
          <S.TagWrapper>
            <MyTag isChecked={true} onClick={onClickMoveToPage('./')}>
              포스트
            </MyTag>
            <MyTag isChecked={false} onClick={onClickMoveToPage('./series')}>
              시리즈
            </MyTag>
          </S.TagWrapper>
        </S.TitleWrapper>
        <PostList />
      </S.Main>
    </>
  )
}
