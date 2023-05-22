import { IQuery } from '@/common/types/generated/types'
import { ChangeEvent } from 'react'

export interface IMyPaymentHistoryUIProps {
  data?: Pick<IQuery, 'fetchPaymentDetailByUser'>
  onClickMoveToPage: (path: string) => () => void
  imageErrorVisible: (event: ChangeEvent<HTMLImageElement>) => void
}
