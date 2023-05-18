import { IQuery } from '@/common/types/generated/types'
import { ChangeEvent } from 'react'

export interface IPurchaseUIProps {
  data?: Pick<IQuery, 'fetchSeries'>
  imageErrorVisible: (event: ChangeEvent<HTMLImageElement>) => void
  onClickPayment: () => void
}
