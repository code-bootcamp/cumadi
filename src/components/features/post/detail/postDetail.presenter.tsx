import * as S from './postDetail.styles'
import PostAnswerList from '../../post-answer/liat/postAnswerList.container'
import PostAnswerWrite from '../../post-answer/write/postAnswerWrite.container'
import SideNavigation from '@/common/layout/sideNavigation/sideNavigation.presenter'
import { postItem } from '@/common/dummyData/post'
import { MyTag } from '@/components/common/customComponent.styles'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import { getDate } from '@/common/libraries/utils'
import { useRouter } from 'next/router'

// interface IPostDetailUIProps {}

export default function PostDetailUI(props: any) {
  const { onClickMoveToPage } = useMoveToPage()
  const PostDetail = props.data?.fetchPost
  const isWriterUser = PostDetail?.user.nickname === props.loginData?.fetchUserLoggedIn?.nickname

  return (
    <>
      {/* 포스트 본문 */}
      <S.Container>
        {/* 좋아요, 메모 저장 */}
        <SideNavigation
          onClickMemoSave={props.onClickMemoSave}
          onClickPick={props.onClickPick}
          likeData={props.likeData}
        />
        <div>
          <S.PostTitle>{PostDetail?.title}</S.PostTitle>
          <S.PostTagWapper>
            {PostDetail?.tags.map((tag: any) => (
              <MyTag key={tag.tagId} id={tag.tagId} isChecked={true}>
                {tag.name}
              </MyTag>
            ))}
          </S.PostTagWapper>

          <S.Header>
            <S.AvatarWrapper>
              <S.Avatar src="/images/avatar.png" />
              <S.Info>
                <S.Writer>{PostDetail?.user.nickname}</S.Writer>
                <S.CreatedAt>{getDate(PostDetail?.createdAt)}</S.CreatedAt>
              </S.Info>
            </S.AvatarWrapper>

            {isWriterUser && (
              <S.PostUpdateBtnWrapper>
                {/* <button onClick={onClickMoveToPage(`/post/${PostDetail?.postId}/stats`)}>통계</button> */}
                <button onClick={onClickMoveToPage(`/post/stats`)}>통계</button>
                <button onClick={onClickMoveToPage(`/post/${PostDetail?.postId}/edit`)}>수정</button>
                <button onClick={props.onClickDelete}>삭제</button>
              </S.PostUpdateBtnWrapper>
            )}
          </S.Header>

          {/* 포스트가 시리즈에 속해있는지 여부 */}
          {props.seriesData && (
            <S.PostInSeries>
              <S.TitleOfPostInSeries>
                <img src="/images/book.svg" alt="시리즈북 아이콘" />
                {props.seriesData?.fetchSeries.title}
              </S.TitleOfPostInSeries>
              {props.isPostInSeriesView && (
                <S.PostInSeriesWrapper>
                  {props.seriesData?.fetchSeries.post.map((el: any) => (
                    <S.PostsInSeries key={el.postId} onClick={onClickMoveToPage(`/post/${el.postId}`)}>
                      {el.title}
                    </S.PostsInSeries>
                  ))}
                </S.PostInSeriesWrapper>
              )}

              <S.PostInSeriesView onClick={props.onClickPostInSeriesView}>
                {props.isPostInSeriesView ? (
                  <>
                    <S.UpArrowIcon />
                    숨기기
                  </>
                ) : (
                  <>
                    <S.DownArrowIcon />
                    목록보기
                  </>
                )}
              </S.PostInSeriesView>
            </S.PostInSeries>
          )}

          <S.ImageWrapper>
            <S.Image src={postItem[0].image} />
          </S.ImageWrapper>

          {/* 포스트 본문 내용 */}
          <div onMouseUp={props.onMouseUpContentMemo}>{PostDetail?.content}</div>
        </div>
        {/* 포스트 댓글 */}
        <PostAnswerList />
        <PostAnswerWrite />
      </S.Container>
    </>
  )
}
