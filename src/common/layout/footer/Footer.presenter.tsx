import { Avatar, Card, Empty } from 'antd'

import * as S from './Footer.styles'
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
import { IPost } from '@/common/types/generated/types'
import { CommentOutlined, HeartOutlined } from '@ant-design/icons'

export default function LayoutFooterUI(props: any) {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.Footer>
      <S.Container>
        <S.FooterTitle>이 포스트들은 어때요?</S.FooterTitle>
        <S.Body>
          {props.data?.fetchPosts.slice(0, 6).map((post: IPost) => (
            <StyledCard
              key={post.postId}
              style={{ width: 400, border: 'unset' }}
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
                  <TruncatedText lines={4}>{post.content}</TruncatedText>
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
                      <HeartOutlined />
                      <span>{post.likes?.length}</span>
                    </ReactionContainer>
                    <ReactionContainer>
                      <CommentOutlined />
                      <span>{post.comments?.length}</span>
                    </ReactionContainer>
                  </ReactionsContainer>
                </InfoSectionContainer>
              </FlexColumnContainer>
            </StyledCard>
          ))}
        </S.Body>
      </S.Container>
    </S.Footer>
  )
}
