import { Avatar } from 'antd'

import * as S from './postList.styles'
import { FlexColumnContainer } from '@/components/common/customComponent.styles'
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

export default function PostListUI({ data }: IPostListUIProps) {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.Body>
      {data?.fetchPosts.map((post: IPost) => (
        <S.StyledCard
          key={post.postId}
          cover={
            <S.CardThumbnailImg
              src={'/images/no-image.jpeg'}
              alt="포스트 썸네일 이미지"
              onClick={onClickMoveToPage(`/post/${post.postId}`)}
            />
          }>
          <FlexColumnContainer gap={'0.5rem'} onClick={onClickMoveToPage(`/post/${post.postId}`)}>
            <BodyTextSm color={Colors.primary} weight={600}>
              {post.series?.title ?? 'X'}
            </BodyTextSm>
            <BodyTextLg>{post.title}</BodyTextLg>
            <BodyText color={Colors.gray1}>
              <TruncatedText lines={4}>{post.content}</TruncatedText>
            </BodyText>
            <InfoSectionContainer>
              <ProfileContainer>
                <Avatar>E</Avatar>
                <ProfileTextDataContainer>
                  <BodyTextSm weight={600}>{post.user?.nickname ?? '닉네임'}</BodyTextSm>
                  <BodyTextSm color={Colors.gray1}>{getCreateDate(post.createdAt) ?? '날짜'}</BodyTextSm>
                </ProfileTextDataContainer>
              </ProfileContainer>
              <ReactionsContainer>
                <ReactionContainer>
                  <img src="images/heart-outlined.svg" alt="좋아요 수" />
                  <span>{post.likes?.length ?? '0'}</span>
                </ReactionContainer>
                <ReactionContainer>
                  <img src="images/comment-outlined.svg" alt="댓글 수" />
                  <span>{post.comments?.length ?? '0'}</span>
                </ReactionContainer>
              </ReactionsContainer>
            </InfoSectionContainer>
          </FlexColumnContainer>
        </S.StyledCard>
      ))}
    </S.Body>
  )
}
