import { Avatar, Card } from 'antd'

import * as S from './Footer.styles'
import { postItem } from '@/common/dummyData/post'
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

export default function LayoutFooterUI() {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.Footer>
      <S.Container>
        <S.FooterTitle>이 포스트들은 어때요?</S.FooterTitle>
        <S.Body>
          {postItem.map(el => (
            <S.StyledCard
              style={{ width: 400, border: 'unset' }}
              cover={<img alt="example" src={el.image} />}
              onClick={onClickMoveToPage(`/post/${el.id}`)}>
              <FlexColumnContainer gap={'0.5rem'}>
                <BodyTextSm color={Colors.primary} weight={600}>
                  카테고리명
                </BodyTextSm>
                <BodyTextLg>{el.title}</BodyTextLg>
                <BodyText color={Colors.gray1}>
                  <TruncatedText lines={4}>{el.contents}</TruncatedText>
                </BodyText>
                <InfoSectionContainer>
                  <ProfileContainer>
                    <Avatar>E</Avatar>
                    <ProfileTextDataContainer>
                      <BodyTextSm weight={600}>{el.name}</BodyTextSm>
                      <BodyTextSm color={Colors.gray1}>{el.createDate}</BodyTextSm>
                    </ProfileTextDataContainer>
                  </ProfileContainer>
                  <ReactionsContainer>
                    <ReactionContainer>
                      <img src="/images/heart-outlined.svg" alt="관심 수" />
                      <span>3</span>
                    </ReactionContainer>
                    <ReactionContainer>
                      <img src="/images/comment-outlined.svg" alt="덧글 수" />
                      <span>3</span>
                    </ReactionContainer>
                  </ReactionsContainer>
                </InfoSectionContainer>
              </FlexColumnContainer>
            </S.StyledCard>
          ))}
        </S.Body>
      </S.Container>
    </S.Footer>
  )
}
