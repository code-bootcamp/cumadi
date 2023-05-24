import { RightOutlined } from '@ant-design/icons'
import { Modal, Avatar } from 'antd'

import * as S from './myPage.styles'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'
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
        <div>내가 작성한 포스트</div>
        <RightOutlined />
      </S.Move>
      <S.Move onClick={onClickMoveToPage('/my/series')}>
        <div>내가 작성한 시리즈</div>
        <RightOutlined />
      </S.Move>
      <S.Move onClick={onClickMoveToPage('/my/paymentHistory')}>
        <div>구매한 시리즈</div>
        <RightOutlined />
      </S.Move>
      <S.Move onClick={onClickMoveToPage('/my/memo')}>
        <div>메모 목록</div>
        <RightOutlined />
      </S.Move>
      <S.Move onClick={onClickMoveToPage('/my/profileSettings')}>
        <div>프로필 수정하기</div>
        <RightOutlined />
      </S.Move>
      <S.MoveDeleteUser onClick={props.showModal}>
        <div>회원 탈퇴</div>
        <RightOutlined />
      </S.MoveDeleteUser>
      <Modal title="회원 탈퇴" open={props.open} onOk={props.onClickResignUser} onCancel={props.onCancel}>
        <p>정말로 탈퇴 하시겠습니까?</p>
      </Modal>
      <DotBottom />
    </S.Container>
  )
}
