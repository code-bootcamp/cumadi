import { IQuery, ISeries } from '@/common/types/generated/types'

export interface ICartUIProps {
  data?: Pick<IQuery, 'fetchShoppingCart'>
  ischecked: (list: ISeries) => boolean
  checkList: Array<any>
  totalPrice: number
  onClickCheckAll: () => void
  onClickCheckList: (list: ISeries) => void
  onClickRemoveList: (seriesId: string) => void
  onClickPayment: () => void
}
