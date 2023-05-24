import { Avatar, Empty } from 'antd'

import * as S from './postList.styles'
import { EmptyStateContainer, FlexColumnContainer, StyledCard } from '@/components/common/customComponent.styles'
import { BodyText, BodyTextLg, BodyTextSm } from '@/common/styles/globalStyles'
import { TruncatedText } from '@/common/styles/UI/util.styles'
import { InfoSectionContainer } from '@/components/common/customComponent.styles'
import { ProfileContainer } from '@/components/common/customComponent.styles'
import { ProfileTextDataContainer } from '@/components/common/customComponent.styles'
import { ReactionContainer } from '@/components/common/customComponent.styles'
import { ReactionsContainer } from '@/components/common/customComponent.styles'
import { Colors } from '@/common/styles/colors'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import { getCreateDate } from '@/common/libraries/utils'
import { IPostListUIProps } from './postList.types'
import { IPost } from '@/common/types/generated/types'
import removeMd from 'remove-markdown'

export default function PostListUI({ data }: IPostListUIProps) {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.Body>
      {data?.fetchPosts.map((post: IPost) => (
        <StyledCard
          bordered={false}
          key={post.postId}
          cover={
            post.image ? (
              <S.CardThumbnailImg
                src={post.image}
                alt="포스트 썸네일 이미지"
                onClick={onClickMoveToPage(`/post/${post.postId}`)}
              />
            ) : (
              <EmptyStateContainer onClick={onClickMoveToPage(`/post/${post.postId}`)}>
                <Empty description={<span>이미지가 없습니다.</span>} />
              </EmptyStateContainer>
            )
          }>
          <FlexColumnContainer gap={'0.5rem'} onClick={onClickMoveToPage(`/post/${post.postId}`)}>
            {post.series?.title ?? <BodyTextSm color={Colors.primary} weight={600} />}
            <BodyTextLg>{post.title}</BodyTextLg>
            <BodyText color={Colors.gray1}>
              <TruncatedText lines={4}>{removeMd(post.content)}</TruncatedText>
            </BodyText>
            <InfoSectionContainer>
              <ProfileContainer>
                <Avatar src={post.user.image ?? ''}>{post.user.nickname[0]}</Avatar>
                <ProfileTextDataContainer>
                  <BodyTextSm weight={600}>{post.user?.nickname ?? '닉네임'}</BodyTextSm>
                  <BodyTextSm color={Colors.gray1}>{getCreateDate(post.createdAt) ?? '날짜'}</BodyTextSm>
                </ProfileTextDataContainer>
              </ProfileContainer>
              <ReactionsContainer>
                <ReactionContainer>
                  <img src="images/heart-outlined.svg" alt="좋아요 수" />
                  <span>{post.likes?.length}</span>
                </ReactionContainer>
                <ReactionContainer>
                  <img src="images/comment-outlined.svg" alt="댓글 수" />
                  <span>{post.comments?.length}</span>
                </ReactionContainer>
              </ReactionsContainer>
            </InfoSectionContainer>
          </FlexColumnContainer>
        </StyledCard>
      ))}
    </S.Body>
  )
}
