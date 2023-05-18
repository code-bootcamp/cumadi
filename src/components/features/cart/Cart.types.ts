import { IQuery, ISeries } from '@/common/types/generated/types'

export interface ICartUIProps {
  data?: Pick<IQuery, 'fetchShoppingCart'>
  ischecked: (list: ISeries) => boolean
  // productList: {
  //   seriesId: string
  //   title: string
  //   image: string
  //   price: number
  //   createAt: string
  // }
  checkList: Array<any>
  totalPrice: number
  onClickCheckAll: () => void
  onClickCheckList: (list: ISeries) => void
  // onClickRemoveChecked: () => void
  onClickRemoveList: (seriesId: string) => void
  onClickPayment: () => void
}

export interface IList {
  seriesId: string
  // title: string
  // image: string
  // price: number
  // createDate: string
  // user: {
  //   nickname: string
  // }
}
