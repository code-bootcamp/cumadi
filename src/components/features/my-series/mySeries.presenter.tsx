import { Avatar } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import * as S from './mySeries.styles'
import {
  FlexColumnContainer,
  MyButton,
  StyledCardCover,
  StyledCardOutlined,
} from '@/components/common/customComponent.styles'
import { BodyTextLg, BodyTextSm } from '@/common/styles/globalStyles'
import { Colors } from '@/common/styles/colors'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import { IMySeriesUIProps } from './mySeries.types'
import { getDate } from '@/common/libraries/utils'

export default function MySeriesUI(props: IMySeriesUIProps) {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <>
      <S.AvatarWrapper>
        <Avatar size={64} src={props.loginData?.fetchUserLoggedIn.image ?? ''}>
          {props.loginData?.fetchUserLoggedIn.nickname[0]}
        </Avatar>
        <S.Writer>{props.loginData?.fetchUserLoggedIn?.nickname}</S.Writer>
        <S.Introduction>{props.loginData?.fetchUserLoggedIn?.introduction}</S.Introduction>
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
        {props.data?.fetchSeriesByUser.map(series => (
          <StyledCardOutlined
            key={series.seriesId}
            cover={<StyledCardCover alt="example" src={series.image} />}
            onClick={onClickMoveToPage(`/series/${series.seriesId}`)}>
            <FlexColumnContainer gap={'0.5rem'}>
              <BodyTextSm color={Colors.primary} weight={600}>
                {series.category?.name}
              </BodyTextSm>
              <BodyTextLg>{series.title}</BodyTextLg>
              <BodyTextSm color={Colors.gray1}>{getDate(series.createdAt)}</BodyTextSm>
            </FlexColumnContainer>
          </StyledCardOutlined>
        ))}
      </S.Body>
    </>
  )
}
