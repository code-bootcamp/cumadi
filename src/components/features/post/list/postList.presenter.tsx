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

interface IPostListUIProps {
  data?: any
}

export default function PostListUI(props: any) {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.Body>
      {props.data?.fetchPosts.map(el => (
        <S.StyledCard
          key={el.postId}
          cover={
            <S.CardThumbnailImg
              src={'/images/no-image.jpeg'}
              alt="포스트 썸네일 이미지"
              onClick={onClickMoveToPage(`/post/${el.postId}`)}
            />
          }>
          <FlexColumnContainer gap={'0.5rem'} onClick={onClickMoveToPage(`/post/${el.postId}`)}>
            <BodyTextSm color={Colors.primary} weight={600}>
              {el.series?.title}
            </BodyTextSm>
            <BodyTextLg>{el.title}</BodyTextLg>
            <BodyText color={Colors.gray1}>
              <TruncatedText lines={4}>{el.content}</TruncatedText>
            </BodyText>
            <InfoSectionContainer>
              <ProfileContainer>
                <Avatar>E</Avatar>
                <ProfileTextDataContainer>
                  {/* <BodyTextSm weight={600}>{el.user.nickname}</BodyTextSm> */}
                  <BodyTextSm color={Colors.gray1}>{el.createDate}</BodyTextSm>
                </ProfileTextDataContainer>
              </ProfileContainer>
              <ReactionsContainer>
                <ReactionContainer>
                  <img src="images/heart-outlined.svg" alt="관심 수" />
                  <span>3</span>
                </ReactionContainer>
                <ReactionContainer>
                  <img src="images/comment-outlined.svg" alt="덧글 수" />
                  <span>3</span>
                </ReactionContainer>
              </ReactionsContainer>
            </InfoSectionContainer>
          </FlexColumnContainer>
        </S.StyledCard>
      ))}
    </S.Body>
  )
}
