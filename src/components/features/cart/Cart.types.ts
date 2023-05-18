import { IQuery } from '@/common/types/generated/types'

export interface ICartUIProps {
  data?: Pick<IQuery, 'fetchShoppingCart'>
  ischecked: (list: IList) => boolean
  // productList: {
  //   seriesId: string
  //   title: string
  //   image: string
  //   price: number
  //   createAt: string
  // }
  checkList: any[]
  totalPrice: number
  onClickCheckAll: () => void
  onClickCheckList: (list: IList) => void
  onClickRemoveChecked: () => void
  onClickRemoveList: (id: string) => void
  onClickPayment: () => void
}

export interface IList {
  seriesId: string
  title: string
  image: string
  price: number
  createDate: string
  user: {
    nickname: string
  }
}
