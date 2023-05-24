import { useQuery } from '@apollo/client'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import MyPaymentHistoryUI from './myPaymentHistory.presenter'
import { FETCH_PAYMENT_DETAIL_BY_USER } from './myPaymentHistory.queries'
import { IQuery } from '@/common/types/generated/types'

export default function MyPaymentHistory() {
  const { onClickMoveToPage } = useMoveToPage()
  const { data } = useQuery<Pick<IQuery, 'fetchPaymentDetailByUser'>>(FETCH_PAYMENT_DETAIL_BY_USER)

  return <MyPaymentHistoryUI data={data} onClickMoveToPage={onClickMoveToPage} />
}
