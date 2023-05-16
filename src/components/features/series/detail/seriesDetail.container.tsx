import React from 'react'
import SeriesDetailUI from './seriesDetail.presenter'
import { useRouter } from 'next/router'
import { gql, useMutation, useQuery } from '@apollo/client'
import { Modal } from 'antd'

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      userId
      email
      nickname
    }
  }
`

const FETCH_SERIES = gql`
  query fetchSeries($seriesId: String!) {
    fetchSeries(seriesId: $seriesId) {
      seriesId
      title
      introduction
      price
      createdAt
      category {
        categoryId
        name
      }
      user {
        userId
        nickname
      }
    }
  }
`

const DELETE_SERIES = gql`
  mutation deleteSeries($seriesId: String!) {
    deleteSeries(seriesId: $seriesId)
  }
`

export default function SeriesDetail() {
  const router = useRouter()
  const seriesId = String(router.query.seriesId);
  
  const { data: user } = useQuery(FETCH_USER_LOGGED_IN)
  const { data } = useQuery(FETCH_SERIES, {
    variables: { seriesId },
  })
  const my = (data?.fetchSeries?.user.userId === user?.fetchUserLoggedIn?.userId ? true : false);
  
  const [deleteSeries] = useMutation(DELETE_SERIES)
  
  const onClickDelete = async () => {
    try {
      if (my) {
        await deleteSeries({
          variables: { seriesId },
        })
        Modal.success({ content: '포스트가 삭제되었습니다.' })
        void router.push('/series')
      } else {
        Modal.error({ content: '일시적인 오류입니다. 다시 시도해주세요.' })
        return ;
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }
  return (
    <SeriesDetailUI
      data={data}
      my={my}
      onClickDelete={onClickDelete}
    />
  )
}
