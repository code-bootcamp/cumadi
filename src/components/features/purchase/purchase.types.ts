import { ChangeEvent } from 'react'
import { IQuery } from '@/common/types/generated/types'

export interface IPurchaseUIProps {
  data?: Pick<IQuery, 'fetchSeries'>
  imageErrorVisible: (event: ChangeEvent<HTMLImageElement>) => void
  onClickPayment: () => void
}
