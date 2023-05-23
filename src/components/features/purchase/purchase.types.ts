import { IQuery } from '@/common/types/generated/types'

export interface IPurchaseUIProps {
  data?: Pick<IQuery, 'fetchSeries'>
  onClickPayment: () => void
}
