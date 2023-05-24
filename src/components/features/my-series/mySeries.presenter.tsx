import { Avatar, Rate } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import * as S from './mySeries.styles'
import {
  FlexColumnContainer,
  MyButton,
  StyledCardCover,
  StyledCardOutlined,
} from '@/components/common/customComponent.styles'
import { BodyText, BodyTextLg, BodyTextSm } from '@/common/styles/globalStyles'
import { InfoSectionContainer } from '@/components/common/customComponent.styles'
import { Colors } from '@/common/styles/colors'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import { IMySeriesUIProps } from './mySeries.types'

export default function MySeriesUI({ data }: IMySeriesUIProps) {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <>
      <S.AvatarWrapper>
        <Avatar size={64} src={data?.fetchSeriesByUser[0].user.image ?? ''}>
          {data?.fetchSeriesByUser[0].user.nickname[0]}
        </Avatar>
        <S.Writer>{data?.fetchSeriesByUser[0].user.nickname}</S.Writer>
        <S.Introduction>{data?.fetchSeriesByUser[0].user.introduction}</S.Introduction>
      </S.AvatarWrapper>
      <S.BtnWrapper>
        <S.TagWrapper>
          <MyButton type="text" onClick={onClickMoveToPage('/my/posts')}>
            포스트
          </MyButton>
          <MyButton type="primary" onClick={onClickMoveToPage('/my/series')}>
            시리즈
          </MyButton>
        </S.TagWrapper>
        <S.RegisterBtn onClick={onClickMoveToPage('/series/new')} icon={<PlusOutlined />}>
          시리즈 작성하기
        </S.RegisterBtn>
      </S.BtnWrapper>
      <S.Body>
        {data?.fetchSeriesByUser.map(series => (
          <StyledCardOutlined
            cover={<StyledCardCover alt="example" src={series.image} />}
            onClick={onClickMoveToPage(`/post/${series.seriesId}`)}>
            <FlexColumnContainer gap={'0.5rem'}>
              <BodyTextSm color={Colors.primary} weight={600}>
                {series.category?.name}
              </BodyTextSm>
              <BodyTextLg>{series.title}</BodyTextLg>
              <InfoSectionContainer>
                <BodyText>n 개의 포스트</BodyText>
              </InfoSectionContainer>
            </FlexColumnContainer>
          </StyledCardOutlined>
        ))}
      </S.Body>
    </>
  )
}
