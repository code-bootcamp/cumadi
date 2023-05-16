import * as S from './sideNavigation.styles'
import { BiSave } from 'react-icons/bi'

interface Props {
  onClickMemoSave: () => void
}

export default function SideNavigation({ onClickMemoSave }: Props) {
  return (
    <S.SideNav>
      <S.SavedButton>
        <S.HeartIcon />
      </S.SavedButton>
      <S.SavedButton onClick={onClickMemoSave}>
        <BiSave />
      </S.SavedButton>
    </S.SideNav>
  )
}
