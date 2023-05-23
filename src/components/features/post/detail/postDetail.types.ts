import { IQuery } from '@/common/types/generated/types'

export interface IPostDetailUIProps {
  loginData?: any
  likeData?: any
  data?: Pick<IQuery, 'fetchPost'>
  seriesData?: Pick<IQuery, 'fetchSeries'>
  isPostInSeriesView: boolean
  onClickDelete: () => void
  onMouseUpContentMemo: () => void
  onClickMemoSave: () => void
  onClickPick: () => void
  onClickPostInSeriesView: () => void
}
