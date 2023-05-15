import * as S from './postDetail.styles'
import PostAnswerList from '../../post-answer/liat/postAnswerList.container'
import PostAnswerWrite from '../../post-answer/write/postAnswerWrite.container'
import SideNavigation from '@/common/layout/sideNavigation/sideNavigation.presenter'
import { postItem } from '@/common/dummyData/post'
import { MyTag } from '@/components/common/customComponent.styles'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'

// interface IPostDetailUIProps {}

export default function PostDetailUI(props: any) {
  const { onClickMoveToPage } = useMoveToPage()
  const PostDetail = props.data?.fetchPost
  const isWriterUser = PostDetail?.user.nickname === props.loginData?.fetchUserLoggedIn?.nickname

  return (
    <>
      {/* 포스트 본문 */}
      <S.Container>
        {/* 좋아요, 저장 */}
        <SideNavigation handleSaveText={props.handleSaveText} />
        <div>
          <S.PostTitle>{PostDetail?.title}</S.PostTitle>
          <S.PostSubTitle>부제목</S.PostSubTitle>
          <S.PostTagWapper>
            <MyTag isChecked={true}>태그</MyTag>
            <MyTag isChecked={true}>태그</MyTag>
            <MyTag isChecked={true}>태그</MyTag>
            <MyTag isChecked={true}>태그</MyTag>
          </S.PostTagWapper>

          <S.Header>
            <S.AvatarWrapper>
              <S.Avatar src="/images/avatar.png" />
              <S.Info>
                <S.Writer>{PostDetail?.user.nickname}</S.Writer>
                <S.CreatedAt>{postItem[0].createDate}</S.CreatedAt>
              </S.Info>
            </S.AvatarWrapper>

            {isWriterUser && (
              <S.PostUpdateBtnWrapper>
                <button onClick={onClickMoveToPage('/post/stats')}>통계</button>
                <button onClick={onClickMoveToPage(`/post/${postItem[0].id}/edit`)}>수정</button>
                <button onClick={props.onClickDelete}>삭제</button>
              </S.PostUpdateBtnWrapper>
            )}
          </S.Header>

          {/* 시리즈에 속해있는지 여부 */}
          <S.PostInSeries>
            <S.TitleOfPostInSeries>
              <img src="/images/book.svg" alt="시리즈북 아이콘" />
              개발자 A의 고군분투
            </S.TitleOfPostInSeries>
            <S.PostInSeriesSelect
              defaultValue="개발자로 살아남는 방법"
              // style={{ width: 120 }}
              options={[
                { value: '개발자로 살아남는 방법', label: '개발자로 살아남는 방법' },
                { value: '금쪽이는 왜 블로그 만드냐', label: '금쪽이는 왜 블로그 만드냐' },
              ]}
            />
          </S.PostInSeries>

          <S.ImageWrapper>
            <S.Image src={postItem[0].image} />
          </S.ImageWrapper>

          {/* 포스트 본문 내용 */}
          <div onMouseUp={props.onMouseUpContentMemo}>{PostDetail?.content}</div>

          {/* <S.LikeWrapper>
            <MyButton type="primary" onClick={props.handleSaveText}>
              저장
            </MyButton>
            <S.Like>
              <img src="/images/heart-outlined.svg" />
            </S.Like>
          </S.LikeWrapper> */}
        </div>
        {/* 포스트 댓글 */}
        <PostAnswerList />
        <PostAnswerWrite />
      </S.Container>
    </>
  )
}
