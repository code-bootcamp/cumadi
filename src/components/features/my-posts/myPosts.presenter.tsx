import { Avatar } from 'antd'

import * as S from './myPosts.styles'
import { FlexColumnContainer, MyTag } from '@/components/common/customComponent.styles'
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
        <S.RegisterBtn onClick={onClickMoveToPage('/post/new')}>
          <S.PlusImg src="/images/plus.svg" alt="더하기 아이콘" />새 포스트 작성하기
        </S.RegisterBtn>
      </S.BtnWrapper>
      <S.Body>
        {props.data?.fetchPostsOfMine.map(postOfMine => (
          <S.StyledCard
            key={postOfMine.postId}
            cover={
              <S.CardThumbnailImg
                src={'/images/no-image.jpeg'}
                alt="포스트 썸네일 이미지"
                onClick={onClickMoveToPage(`/post/${postOfMine.postId}`)}
              />
            }
            onClick={onClickMoveToPage(`/post/${postOfMine.postId}`)}>
            <FlexColumnContainer gap={'0.5rem'}>
              <BodyTextSm color={Colors.primary} weight={600}>
                {postOfMine?.series?.title}
              </BodyTextSm>
              <BodyTextLg>{postOfMine.title}</BodyTextLg>
              <BodyText color={Colors.gray1}>
                <TruncatedText lines={4}>{postOfMine.content}</TruncatedText>
              </BodyText>
              <InfoSectionContainer>
                <ProfileContainer>
                  <Avatar>E</Avatar>
                  <ProfileTextDataContainer>
                    <BodyTextSm weight={600}>{postOfMine.user.nickname}</BodyTextSm>
                    <BodyTextSm color={Colors.gray1}>{postOfMine.createDate}</BodyTextSm>
                  </ProfileTextDataContainer>
                </ProfileContainer>
                <ReactionsContainer>
                  <ReactionContainer>
                    <img src="/images/heart-outlined.svg" alt="좋아요 수" />
                    <span>{postOfMine.likes?.length}</span>
                  </ReactionContainer>
                  <ReactionContainer>
                    <img src="/images/comment-outlined.svg" alt="댓글 수" />
                    <span>{postOfMine.likes?.length}</span>
                  </ReactionContainer>
                </ReactionsContainer>
              </InfoSectionContainer>
            </FlexColumnContainer>
          </S.StyledCard>
        ))}
      </S.Body>
    </>
  )
}
