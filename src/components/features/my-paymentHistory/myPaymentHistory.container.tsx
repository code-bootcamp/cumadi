import { useQuery } from '@apollo/client'
import MyPaymentHistoryUI from './myPaymentHistory.presenter'
import { FETCH_PAYMENT_DETAIL_BY_USER } from './myPaymentHistory.queries'
import { IQuery } from '@/common/types/generated/types'

export default function MyPaymentHistory() {
  const { data } = useQuery<Pick<IQuery, 'fetchPaymentDetailByUser'>>(FETCH_PAYMENT_DETAIL_BY_USER)
  console.log(data?.fetchPaymentDetailByUser)

  return <MyPaymentHistoryUI data={data} />
}
