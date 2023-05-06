import * as S from './sideNavigation.styles'

export default function SideNavigation(props: any) {
  return (
    <S.SideNav>
      <S.SavedButton>
        <S.HeartIcon />
      </S.SavedButton>
      <S.SavedButton onClick={props.handleSaveText}>저장</S.SavedButton>
    </S.SideNav>
  )
}
