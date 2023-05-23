import { Avatar, Empty } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import * as S from './myPosts.styles'
import { FlexColumnContainer, StyledCardCover, StyledCardOutlined } from '@/components/common/customComponent.styles'
import { BodyText, BodyTextLg, BodyTextSm } from '@/common/styles/globalStyles'
import { TruncatedText } from '@/common/styles/UI/util.styles'
import { InfoSectionContainer } from '@/components/common/customComponent.styles'
import { ProfileContainer } from '@/components/common/customComponent.styles'
import { ProfileTextDataContainer } from '@/components/common/customComponent.styles'
import { ReactionContainer } from '@/components/common/customComponent.styles'
import { ReactionsContainer } from '@/components/common/customComponent.styles'
import { Colors } from '@/common/styles/colors'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'

export default function MyPostsUI(props: any) {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <>
      <S.AvatarWrapper>
        <S.Avatar src="/images/avatar.png" />
        <S.Writer>개발자</S.Writer>
        <S.Introduction>개발새발 개발자</S.Introduction>
      </S.AvatarWrapper>
      <S.BtnWrapper>
        <S.TagWrapper>
          <button onClick={onClickMoveToPage('/my/posts')}>포스트</button>
          <button onClick={onClickMoveToPage('/my/series')}>시리즈</button>
        </S.TagWrapper>
        <S.RegisterBtn onClick={onClickMoveToPage('/post/new')} icon={<PlusOutlined />}>
          포스트 작성하기
        </S.RegisterBtn>
      </S.BtnWrapper>
      <S.Body>
        {props.data?.fetchPostsOfMine.map((post: any) => (
          <StyledCardOutlined
            key={post.postId}
            cover={
              post.image ? (
                <StyledCardCover
                  src={post.image}
                  alt="포스트 썸네일 이미지"
                  onClick={onClickMoveToPage(`/post/${post.postId}`)}
                />
              ) : (
                <Empty description={<span>이미지가 없습니다.</span>} />
              )
            }
            onClick={onClickMoveToPage(`/post/${post.postId}`)}>
            <FlexColumnContainer gap={'0.5rem'}>
              <BodyTextSm color={Colors.primary} weight={600}>
                {post?.series?.title}
              </BodyTextSm>
              <BodyTextLg>{post.title}</BodyTextLg>
              <BodyText color={Colors.gray1}>
                <TruncatedText lines={4}>{post.content}</TruncatedText>
              </BodyText>
              <InfoSectionContainer>
                <ProfileContainer>
                  <Avatar src={post.user.image ?? ''}>{post.user.nickname[0]}</Avatar>
                  <ProfileTextDataContainer>
                    <BodyTextSm weight={600}>{post.user.nickname}</BodyTextSm>
                    <BodyTextSm color={Colors.gray1}>{post.createDate}</BodyTextSm>
                  </ProfileTextDataContainer>
                </ProfileContainer>
                <ReactionsContainer>
                  <ReactionContainer>
                    <img src="/images/heart-outlined.svg" alt="좋아요 수" />
                    <span>3</span>
                  </ReactionContainer>
                  <ReactionContainer>
                    <img src="/images/comment-outlined.svg" alt="덧글 수" />
                    <span>3</span>
                  </ReactionContainer>
                </ReactionsContainer>
              </InfoSectionContainer>
            </FlexColumnContainer>
          </StyledCardOutlined>
        ))}
      </S.Body>
    </>
  )
}
