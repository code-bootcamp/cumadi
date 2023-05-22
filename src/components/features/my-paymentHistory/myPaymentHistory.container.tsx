import { useQuery } from '@apollo/client'
import MyPaymentHistoryUI from './myPaymentHistory.presenter'
import { FETCH_PAYMENT_DETAIL_BY_USER } from './myPaymentHistory.queries'
import { IQuery } from '@/common/types/generated/types'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import { ChangeEvent } from 'react'

export default function MyPaymentHistory() {
  const { onClickMoveToPage } = useMoveToPage()
  const { data } = useQuery<Pick<IQuery, 'fetchPaymentDetailByUser'>>(FETCH_PAYMENT_DETAIL_BY_USER)
  console.log(data?.fetchPaymentDetailByUser)

  const imageErrorVisible = (event: ChangeEvent<HTMLImageElement>) => {
    event.target.src = '/images/no-image.jpeg'
  }

  return <MyPaymentHistoryUI data={data} onClickMoveToPage={onClickMoveToPage} imageErrorVisible={imageErrorVisible} />
}
