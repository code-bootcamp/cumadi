import { Avatar, Empty } from 'antd'

import * as S from './myPosts.styles'
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
import { PlusOutlined } from '@ant-design/icons'

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
          <MyTag isChecked={true} onClick={onClickMoveToPage('/my/posts')}>
            포스트
          </MyTag>
          <MyTag isChecked={false} onClick={onClickMoveToPage('/my/series')}>
            시리즈
          </MyTag>
        </S.TagWrapper>
        <S.RegisterBtn onClick={onClickMoveToPage('/post/new')} icon={<PlusOutlined />}>
          포스트 작성하기
        </S.RegisterBtn>
      </S.BtnWrapper>
      <S.Body>
        {props.data?.fetchPostsOfMine.map(el => (
          <StyledCardOutlined
            key={el.postId}
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
            }
            onClick={onClickMoveToPage(`/post/${el.postId}`)}>
            <FlexColumnContainer gap={'0.5rem'}>
              <BodyTextSm color={Colors.primary} weight={600}>
                {el?.series?.title}
              </BodyTextSm>
              <BodyTextLg>{el.title}</BodyTextLg>
              <BodyText color={Colors.gray1}>
                <TruncatedText lines={4}>{el.content}</TruncatedText>
              </BodyText>
              <InfoSectionContainer>
                <ProfileContainer>
                  <Avatar src={el.user.image ?? ''}>{el.user.nickname[0]}</Avatar>
                  <ProfileTextDataContainer>
                    <BodyTextSm weight={600}>{el.user.nickname}</BodyTextSm>
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
