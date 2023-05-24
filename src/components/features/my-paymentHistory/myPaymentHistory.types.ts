import { IQuery } from '@/common/types/generated/types'

export interface IMyPaymentHistoryUIProps {
  data?: Pick<IQuery, 'fetchPaymentDetailByUser'>
  onClickMoveToPage: (path: string) => () => void
}
