import { MyTag } from '@/components/common/customComponent.styles'
import PostList from '@/components/features/post/list/postList.container'
import Head from 'next/head'
import * as S from './index.styles'
export default function Home() {
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
            <MyTag isChecked={true}>전체</MyTag>
            <MyTag isChecked={false}>개발</MyTag>
            <MyTag isChecked={false}>에세이</MyTag>
            <MyTag isChecked={false}>독서</MyTag>
          </S.TagWrapper>
        </S.TitleWrapper>
        <PostList />
      </S.Main>
    </>
  )
}
