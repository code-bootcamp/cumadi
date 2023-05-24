import * as S from './postDetail.styles'

import SideNavigation from '@/common/layout/sideNavigation/sideNavigation.presenter'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'

import { getDate } from '@/common/libraries/utils'
import { IPostDetailUIProps } from './postDetail.types'
import PostCommentList from '../../post-comment/list/postCommentList.container'
import PostCommentWrite from '../../post-comment/write/postCommentWrite.container'
import MarkdownView from '@/components/common/markdownViewer/markdownViwer.container'
import { Avatar } from 'antd'
import { CaretDownFilled, CaretUpFilled, ReadOutlined } from '@ant-design/icons'

export default function PostDetailUI(props: IPostDetailUIProps) {
  const { onClickMoveToPage } = useMoveToPage()

  const POST_DETAIL = props.data?.fetchPost
  const isWriterUser = POST_DETAIL?.user.nickname === props.loginData?.fetchUserLoggedIn?.nickname

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
          <S.PostTitle>{POST_DETAIL?.title}</S.PostTitle>
          <S.PostTagWrapper>
            {POST_DETAIL?.tags?.map((tag: any) => (
              <span key={tag.tagId} id={tag.tagId}>
                {tag.name}
              </span>
            ))}
          </S.PostTagWrapper>

          <S.Header>
            <S.AvatarWrapper>
              <Avatar src={POST_DETAIL?.user.image ?? ''} style={{ width: '2.5rem', height: '2.5rem' }}>
                {POST_DETAIL?.user.nickname[0]}
              </Avatar>
              <S.Info>
                <S.Writer>{POST_DETAIL?.user.nickname}</S.Writer>
                <S.CreatedAt>{getDate(POST_DETAIL?.createdAt)}</S.CreatedAt>
              </S.Info>
            </S.AvatarWrapper>

            {isWriterUser && (
              <S.PostUpdateBtnWrapper>
                <button onClick={onClickMoveToPage(`/post/${POST_DETAIL?.postId}/stats`)}>통계</button>
                <button onClick={onClickMoveToPage(`/post/${POST_DETAIL?.postId}/edit`)}>수정</button>
                <button onClick={props.onClickDelete}>삭제</button>
              </S.PostUpdateBtnWrapper>
            )}
          </S.Header>

          {/* 포스트가 시리즈에 속해있는지 여부 */}
          {props.seriesData && (
            <S.PostInSeries>
              <S.TitleOfPostInSeries>
                <ReadOutlined />
                {props.seriesData?.fetchSeries.title}
              </S.TitleOfPostInSeries>
              {/* 포스트 in 시리즈 리스트들 */}
              {props.isPostInSeriesView && (
                <S.PostInSeriesWrapper>
                  {props.seriesData?.fetchSeries.post?.map((el: any) => (
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
                    <CaretUpFilled style={{ marginRight: '0.5rem' }} />
                    숨기기
                  </>
                ) : (
                  <>
                    <CaretDownFilled style={{ marginRight: '0.5rem' }} />
                    목록보기
                  </>
                )}
              </S.PostInSeriesView>
            </S.PostInSeries>
          )}

          {/* 포스트 본문 내용 */}
          {POST_DETAIL && <MarkdownView onMouseUp={props.onMouseUpContentMemo} content={POST_DETAIL?.content} />}
        </div>
        {/* 포스트 댓글 */}
        <PostCommentList />
        <PostCommentWrite isEditPostComment={false} />
      </S.Container>
    </>
  )
}
