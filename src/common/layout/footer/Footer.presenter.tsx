import { Avatar, Card, Empty } from 'antd'

import * as S from './Footer.styles'
import { FlexColumnContainer, StyledCard, StyledCardCover } from '@/components/common/customComponent.styles'
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

export default function LayoutFooterUI(props: any) {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.Footer>
      <S.Container>
        <S.FooterTitle>이 포스트들은 어때요?</S.FooterTitle>
        <S.Body>
          {props.data?.fetchPosts.slice(0, 6).map((el: any) => (
            <StyledCard
              key={el.postId}
              style={{ width: 400, border: 'unset' }}
              cover={
                el.image ? (
                  <StyledCardCover
                    src={el.image}
                    alt="포스트 썸네일 이미지"
                    onClick={onClickMoveToPage(`/post/${el.postId}`)}
                  />
                ) : (
                  <Empty description={<span>이미지가 없습니다.</span>} />
                )
              }>
              <FlexColumnContainer gap={'0.5rem'} onClick={onClickMoveToPage(`/post/${el.postId}`)}>
                <BodyTextSm color={Colors.primary} weight={600}>
                  {el.series?.title ?? 'NO SERIES'}
                </BodyTextSm>
                <BodyTextLg>{el.title}</BodyTextLg>
                <BodyText color={Colors.gray1}>
                  <TruncatedText lines={4}>{el.content}</TruncatedText>
                </BodyText>
                <InfoSectionContainer>
                  <ProfileContainer>
                    <Avatar src={el.user.image ?? ''}>{el.user.nickname[0]}</Avatar>
                    <ProfileTextDataContainer>
                      <BodyTextSm weight={600}>{el.user?.nickname ?? '닉네임'}</BodyTextSm>
                      <BodyTextSm color={Colors.gray1}>{getCreateDate(el.createdAt) ?? '날짜'}</BodyTextSm>
                    </ProfileTextDataContainer>
                  </ProfileContainer>
                  <ReactionsContainer>
                    <ReactionContainer>
                      <img src="/images/heart-outlined.svg" alt="관심 수" />
                      <span>{el.likes?.length}</span>
                    </ReactionContainer>
                    <ReactionContainer>
                      <img src="/images/comment-outlined.svg" alt="덧글 수" />
                      <span>{el.comments?.length}</span>
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
