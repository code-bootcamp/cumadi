import { RightOutlined } from '@ant-design/icons'
import { Modal } from 'antd'

import * as S from './myPage.styles'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'

export default function MyPageUI(props: any) {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.Container>
      <S.AvatarWrapper>
        <S.Avatar
          src={
            props.loginData?.fetchUserLoggedIn.image ? props.loginData?.fetchUserLoggedIn.image : '/images/avatar.png'
          }
        />
        <S.Writer>{props.loginData?.fetchUserLoggedIn.nickname}</S.Writer>
        <S.Introduction>
          {props.loginData?.fetchUserLoggedIn.introduction
            ? props.loginData?.fetchUserLoggedIn.introduction
            : '자기소개를 입력하세요.'}
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
      <S.MoveDeleteUser onClick={props.showModal}>
        <div>회원 탈퇴</div>
        <RightOutlined />
      </S.MoveDeleteUser>
      <Modal title="회원 탈퇴" open={props.open} onOk={props.onClickResignUser} onCancel={props.onCancel}>
        <p>정말로 탈퇴 하시겠습니까?</p>
      </Modal>
    </S.Container>
  )
}
