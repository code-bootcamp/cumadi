import React from 'react'
import SeriesDetailUI from './seriesDetail.presenter'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@apollo/client'
import { Modal } from 'antd'
import { DELETE_SERIES, FETCH_SERIES, FETCH_USER_LOGGED_IN } from './seriesDetail.query'

export default function SeriesDetail() {
  const router = useRouter()
  const seriesId = String(router.query.seriesId)
  
  const { data: user } = useQuery(FETCH_USER_LOGGED_IN)
  const { data } = useQuery(FETCH_SERIES, {variables: { seriesId }})
  const [deleteSeries] = useMutation(DELETE_SERIES)
  
  const isWriterData = (data?.fetchSeries?.user.userId === user?.fetchUserLoggedIn?.userId ? true : false);
  
  const onClickDelete = async () => {
    try {
      await deleteSeries({
        variables: { seriesId },
      })
      Modal.success({ content: '시리즈가 삭제되었습니다.' })
      void router.push('/series')
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return (
    <SeriesDetailUI
      data={data}
      isWriterData={isWriterData}
      onClickDelete={onClickDelete}
    />
  )
}
