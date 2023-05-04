import { RightOutlined } from '@ant-design/icons'

import * as S from './myPage.styles'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'

export default function MyPageUI() {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.Container>
      <S.AvatarWrapper>
        <S.Avatar src="/images/avatar.png" />
        <S.Writer>개발자</S.Writer>
        <S.Introduction>개발새발 개발자</S.Introduction>
      </S.AvatarWrapper>
      <S.Move onClick={onClickMoveToPage('./my/posts')}>
        <div>내가 쓴 포스트</div>
        <RightOutlined />
      </S.Move>
      <S.Move onClick={onClickMoveToPage('./my/paymentHistory')}>
        <div>내가 구매한 시리즈</div>
        <RightOutlined />
      </S.Move>
      <S.Move onClick={onClickMoveToPage('./my/highlight')}>
        <div>내 하이라이트 모음</div>
        <RightOutlined />
      </S.Move>
      <S.Move onClick={onClickMoveToPage('./my/posts')}>
        <div>인터페이스 커스텀하기</div>
        <RightOutlined />
      </S.Move>
      <S.Move onClick={onClickMoveToPage('./my/profileSettings')}>
        <div>프로필 수정하기</div>
        <RightOutlined />
      </S.Move>
      <S.MoveDeleteUser>
        <div>회원탈퇴</div>
        <RightOutlined />
      </S.MoveDeleteUser>
    </S.Container>
  )
}
