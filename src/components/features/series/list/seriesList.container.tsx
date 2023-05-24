import { useQuery } from '@apollo/client'
import { useState } from 'react'

import SeriesListUI from './seriesList.presenter'
import {
  FETCH_RATING_BY_SERIES,
  FETCH_SERIES_ALL,
  FETCH_SERIES_BY_CATEGORY,
  FETCH_SERIES_CATEGORIES,
} from './seriesList.query'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import {
  IQuery,
  IQueryFetchSeriesArgs,
  IQueryFetchSeriesByCategoryArgs,
  IQueryFetchSeriesCategoryArgs,
} from '@/common/types/generated/types'

export default function SeriesList() {
  const { onClickMoveToPage } = useMoveToPage()

  const [seriesMenu, setSeriesMenu] = useState<string>('')
  const [countIndex, setCountIndex] = useState<number>(-1)
  const [isShowAll, setIsShowAll] = useState(true)
  const [isfreeOn, setIsFreeOn] = useState(false)

  const { data } = useQuery<Pick<IQuery, 'fetchSeriesAll'>, IQueryFetchSeriesArgs>(FETCH_SERIES_ALL)

  const { data: category } = useQuery<Pick<IQuery, 'fetchSeriesCategories'>, IQueryFetchSeriesCategoryArgs>(
    FETCH_SERIES_CATEGORIES,
  )
  const { data: menu } = useQuery<Pick<IQuery, 'fetchSeriesByCategory'>, IQueryFetchSeriesByCategoryArgs>(
    FETCH_SERIES_BY_CATEGORY,
    {
      variables: { categoryId: seriesMenu },
    },
  )

  const onClickFreeSeries = () => {
    setIsFreeOn(!isfreeOn)
  }

  const onClickAllSeries = () => {
    setSeriesMenu('')
    setIsShowAll(true)
    setCountIndex(-1)
  }

  const onClickCategory = (value: string, index: number) => () => {
    setSeriesMenu(value)
    setIsShowAll(false)
    setCountIndex(index)
  }

  return (
    <>
      <SeriesListUI
        category={category}
        data={data}
        menu={menu}
        isShowAll={isShowAll}
        seriesMenu={seriesMenu}
        countIndex={countIndex}
        isfreeOn={isfreeOn}
        onClickCategory={onClickCategory}
        onClickAllSeries={onClickAllSeries}
        onClickMoveToPage={onClickMoveToPage}
        onClickFreeSeries={onClickFreeSeries}
      />
    </>
  )
}
