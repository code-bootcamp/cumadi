import * as S from './sideNavigation.styles'

interface Props {
  onClickMemoSave: () => void
  onClickPick: () => void
  likeData: any
}

export default function SideNavigation({ onClickMemoSave, onClickPick, likeData }: Props) {
  return (
    <S.sideNavWrapper>
      <S.SideNav>
        <S.LikeWrapper>
          <S.SavedButton onClick={onClickPick}>
            <S.HeartIcon />
          </S.SavedButton>
          <p>{likeData?.fetchLikeCountByPost}</p>
        </S.LikeWrapper>
        <S.SavedButton onClick={onClickMemoSave}>
          <S.SaveIcon />
        </S.SavedButton>
      </S.SideNav>
    </S.sideNavWrapper>
  )
}
