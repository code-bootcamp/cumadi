import { RightOutlined, UserOutlined } from '@ant-design/icons'

import * as S from './myPage.styles'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import { Avatar } from 'antd'
import { DotBottom } from '@/components/common/customComponent.styles'

export default function MyPageUI(props: any) {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.Container>
      <S.AvatarWrapper>
        <Avatar size={64} src={props.loginData?.fetchUserLoggedIn.image ?? ''}>
          {props.loginData?.fetchUserLoggedIn.nickname[0]}
        </Avatar>
        <S.Writer>{props.loginData?.fetchUserLoggedIn.nickname}</S.Writer>
        <S.Introduction>
          {props.loginData?.fetchUserLoggedIn.introduction
            ? props.loginData?.fetchUserLoggedIn.introduction
            : '자기소개가 없습니다.'}
        </S.Introduction>
      </S.AvatarWrapper>
      <S.Move onClick={onClickMoveToPage('/my/posts')}>
        <div>내가 쓴 포스트</div>
        <RightOutlined />
      </S.Move>
      <S.Move onClick={onClickMoveToPage('/my/series')}>
        <div>내가 쓴 시리즈</div>
        <RightOutlined />
      </S.Move>
      <S.Move onClick={onClickMoveToPage('/my/paymentHistory')}>
        <div>결제내역(구매한 시리즈)</div>
        <RightOutlined />
      </S.Move>
      <S.Move onClick={onClickMoveToPage('/my/memo')}>
        <div>메모 목록</div>
        <RightOutlined />
      </S.Move>
      <S.Move onClick={onClickMoveToPage('/my/posts')}>
        <div>인터페이스 커스텀하기</div>
        <RightOutlined />
      </S.Move>
      <S.Move onClick={onClickMoveToPage('/my/profileSettings')}>
        <div>프로필 수정하기</div>
        <RightOutlined />
      </S.Move>
      <S.MoveDeleteUser>
        <div>회원탈퇴</div>
      </S.MoveDeleteUser>
      <DotBottom />
    </S.Container>
  )
}
