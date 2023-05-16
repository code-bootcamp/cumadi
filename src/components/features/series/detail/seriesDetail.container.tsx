import React from 'react'
import SeriesDetailUI from './seriesDetail.presenter'
import { useRouter } from 'next/router'
import { gql, useQuery } from '@apollo/client'

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

  const { data } = useQuery(FETCH_SERIES, {
    variables: { seriesId },
  })
  return (
    <SeriesDetailUI data={data}/>
  )
}
