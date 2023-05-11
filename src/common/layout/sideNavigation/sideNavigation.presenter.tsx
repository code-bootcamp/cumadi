import * as S from './sideNavigation.styles'
import { BiSave } from 'react-icons/bi'

export default function SideNavigation(props: any) {
  return (
    <S.SideNav>
      <S.SavedButton>
        <S.HeartIcon />
      </S.SavedButton>
      <S.SavedButton onClick={props.handleSaveText}>
        <BiSave />
      </S.SavedButton>
    </S.SideNav>
  )
}
