import { Rate } from 'antd'

import * as S from './mySeries.styles'
import { postItem } from '@/common/dummyData/post'
import { FlexColumnContainer, MyTag } from '@/components/common/customComponent.styles'
import { BodyText, BodyTextLg, BodyTextSm } from '@/common/styles/globalStyles'
import { InfoSectionContainer } from '@/components/common/customComponent.styles'
import { Colors } from '@/common/styles/colors'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'

export default function MySeriesUI() {
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
          <MyTag isChecked={false} onClick={onClickMoveToPage('/my/posts')}>
            포스트
          </MyTag>
          <MyTag isChecked={true} onClick={onClickMoveToPage('/my/series')}>
            시리즈
          </MyTag>
        </S.TagWrapper>
        <S.RegisterBtn onClick={onClickMoveToPage('/series/new')}>
          <S.PlusImg src="/images/plus.svg" alt="더하기 아이콘" />새 시리즈 만들기
        </S.RegisterBtn>
      </S.BtnWrapper>
      <S.Body>
        {postItem.map(el => (
          <S.StyledCard cover={<img alt="example" src={el.image} onClick={onClickMoveToPage(`/post/${el.id}`)} />}>
            <FlexColumnContainer gap={'0.5rem'}>
              <BodyTextSm color={Colors.primary} weight={600}>
                카테고리명
              </BodyTextSm>
              <BodyTextLg>{el.title}</BodyTextLg>
              <InfoSectionContainer>
                <BodyText>n 개의 포스트</BodyText>
                <Rate />
              </InfoSectionContainer>
            </FlexColumnContainer>
          </S.StyledCard>
        ))}
      </S.Body>
    </>
  )
}
