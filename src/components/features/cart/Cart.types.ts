export interface ICartUIProps {
  isChecked: (list: IList) => boolean
  productList: {
    id: string
    name: string
    title: string
    contents: string
    image: string
    price: number
    createDate: string
  }[]
  checkList: any[]
  totalPrice: number
  onClickCheckAll: () => void
  onClickCheckList: (list: IList) => void
  onClickRemoveChecked: () => void
  onClickRemoveList: (id: string) => void
  onClickPayment: () => void
}

export interface IList {
  id: string
  name: string
  title: string
  contents: string
  image: string
  price: number
  createDate: string
}
