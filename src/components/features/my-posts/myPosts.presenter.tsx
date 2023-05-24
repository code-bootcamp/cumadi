import { Avatar, Empty } from 'antd'
import { CommentOutlined, HeartOutlined, PlusOutlined } from '@ant-design/icons'
import RemoveMarkdown from 'remove-markdown'

import * as S from './myPosts.styles'
import {
  DotBottom,
  EmptyStateContainer,
  FlexColumnContainer,
  MyButton,
  StyledCard,
  StyledCardCover,
} from '@/components/common/customComponent.styles'
import { BodyText, BodyTextLg, BodyTextSm } from '@/common/styles/globalStyles'
import { TruncatedText } from '@/common/styles/UI/util.styles'
import { InfoSectionContainer } from '@/components/common/customComponent.styles'
import { ProfileContainer } from '@/components/common/customComponent.styles'
import { ProfileTextDataContainer } from '@/components/common/customComponent.styles'
import { ReactionContainer } from '@/components/common/customComponent.styles'
import { ReactionsContainer } from '@/components/common/customComponent.styles'
import { Colors } from '@/common/styles/colors'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import { IMyPostsUIProps } from './myPosts.types'

export default function MyPostsUI(props: IMyPostsUIProps) {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <>
      <S.AvatarWrapper>
        <Avatar size={64} src={props.data?.fetchPostsOfMine[0].user.image ?? ''}>
          {props.data?.fetchPostsOfMine[0].user.nickname[0]}
        </Avatar>
        <S.Writer>{props.data?.fetchPostsOfMine[0].user.nickname}</S.Writer>
        <S.Introduction>{props.data?.fetchPostsOfMine[0].user.introduction}</S.Introduction>
      </S.AvatarWrapper>
      <S.BtnWrapper>
        <S.TagWrapper>
          <MyButton type="primary" onClick={onClickMoveToPage('/my/posts')}>
            포스트
          </MyButton>
          <MyButton type="text" onClick={onClickMoveToPage('/my/series')}>
            시리즈
          </MyButton>
        </S.TagWrapper>
        <S.RegisterBtn onClick={onClickMoveToPage('/post/new')} icon={<PlusOutlined />}>
          포스트 작성하기
        </S.RegisterBtn>
      </S.BtnWrapper>
      <S.Body>
        {props.data?.fetchPostsOfMine.map((postOfMine: any) => (
          <StyledCard
            bordered={false}
            key={postOfMine.postId}
            cover={
              postOfMine.image ? (
                <StyledCardCover
                  src={postOfMine.image}
                  alt="포스트 썸네일 이미지"
                  onClick={onClickMoveToPage(`/post/${postOfMine.postId}`)}
                />
              ) : (
                <EmptyStateContainer onClick={onClickMoveToPage(`/post/${postOfMine.postId}`)}>
                  <Empty description={<span>이미지가 없습니다.</span>} />
                </EmptyStateContainer>
              )
            }>
            <FlexColumnContainer gap={'0.5rem'} onClick={onClickMoveToPage(`/post/${postOfMine.postId}`)}>
              <BodyTextSm color={Colors.primary} weight={600}>
                {postOfMine?.series?.title}
              </BodyTextSm>
              <BodyTextLg>{postOfMine.title}</BodyTextLg>
              <BodyText color={Colors.gray1}>
                <TruncatedText lines={4}>{RemoveMarkdown(postOfMine.content)}</TruncatedText>
              </BodyText>
              <InfoSectionContainer>
                <ProfileContainer>
                  <Avatar src={postOfMine.user.image ?? ''}>{postOfMine.user.nickname[0]}</Avatar>
                  <ProfileTextDataContainer>
                    <BodyTextSm weight={600}>{postOfMine.user.nickname}</BodyTextSm>
                    <BodyTextSm color={Colors.gray1}>{postOfMine.createDate}</BodyTextSm>
                  </ProfileTextDataContainer>
                </ProfileContainer>
                <ReactionsContainer>
                  <ReactionContainer>
                    <HeartOutlined />
                    <span>{postOfMine.likes?.length}</span>
                  </ReactionContainer>
                  <ReactionContainer>
                    <CommentOutlined />
                    <span>{postOfMine.likes?.length}</span>
                  </ReactionContainer>
                </ReactionsContainer>
              </InfoSectionContainer>
            </FlexColumnContainer>
          </StyledCard>
        ))}
      </S.Body>
      <DotBottom />
    </>
  )
}
