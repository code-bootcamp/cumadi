import { Avatar } from 'antd'

import * as S from './myPosts.styles'
import { postItem } from '@/common/dummyData/post'
import {
  FlexColumnContainer,
  MyTag,
  StyledCardCover,
  StyledCardOutlined,
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

export default function MyPostsUI() {
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
          <MyTag isChecked={true} onClick={onClickMoveToPage('/my/posts')}>
            포스트
          </MyTag>
          <MyTag isChecked={false} onClick={onClickMoveToPage('/my/series')}>
            시리즈
          </MyTag>
        </S.TagWrapper>
        <S.RegisterBtn onClick={onClickMoveToPage('/post/new')}>
          <S.PlusImg src="/images/plus.svg" alt="더하기 아이콘" />새 포스트 작성하기
        </S.RegisterBtn>
      </S.BtnWrapper>
      <S.Body>
        {postItem.map(el => (
          <StyledCardOutlined
            cover={<StyledCardCover alt="example" src={el.image} />}
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
          </StyledCardOutlined>
        ))}
      </S.Body>
    </>
  )
}
