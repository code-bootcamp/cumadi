import * as S from './postDetail.styles'

import SideNavigation from '@/common/layout/sideNavigation/sideNavigation.presenter'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'

import { getDate } from '@/common/libraries/utils'
import PostCommentList from '../../post-comment/list/postCommentList.container'
import PostCommentWrite from '../../post-comment/write/postCommentWrite.container'

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
              <S.PostTag key={tag.tagId} id={tag.tagId}>
                {tag.name}
              </S.PostTag>
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
                <button onClick={onClickMoveToPage(`/post/${PostDetail?.postId}/stats`)}>통계</button>
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
              {/* 포스트 in 시리즈 리스트들 */}
              {props.isPostInSeriesView && (
                <S.PostInSeriesWrapper>
                  {props.seriesData?.fetchSeries.post.map((el: any) => (
                    <S.PostsInSeries key={el.postId} onClick={onClickMoveToPage(`/post/${el.postId}`)}>
                      {el.title}
                    </S.PostsInSeries>
                  ))}
                </S.PostInSeriesWrapper>
              )}
              {/* 포스트 in 시리즈 버튼 */}
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
            <S.ThumbnailImage src={PostDetail?.image} />
          </S.ImageWrapper>

          {/* 포스트 본문 내용 */}
          <div onMouseUp={props.onMouseUpContentMemo}>{PostDetail?.content}</div>
        </div>
        {/* 포스트 댓글 */}
        <PostCommentList />
        <PostCommentWrite isEditPostComment={false} />
      </S.Container>
    </>
  )
}
