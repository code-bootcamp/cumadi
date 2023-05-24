import { useQuery } from '@apollo/client'
import SeriesListUI from './seriesList.presenter'
import {
  FETCH_RATING_BY_SERIES,
  FETCH_SERIES_ALL,
  FETCH_SERIES_BY_CATEGORY,
  FETCH_SERIES_CATEGORIES,
} from './seriesList.query'
import { useState } from 'react'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'

export default function SeriesList() {
  const { onClickMoveToPage } = useMoveToPage()

  const [seriesMenu, setSeriesMenu] = useState('')
  const [isShowAll, setIsShowAll] = useState(true)
  const [countIndex, setCountIndex] = useState(-1)
  const [isfreeOn, setIsFreeOn] = useState(false)

  const { data } = useQuery(FETCH_SERIES_ALL)
  const { data: rate } = useQuery(FETCH_RATING_BY_SERIES)
  const { data: category } = useQuery(FETCH_SERIES_CATEGORIES)
  const { data: menu } = useQuery(FETCH_SERIES_BY_CATEGORY, {
    variables: { categoryId: seriesMenu },
  })

  const onClickFreeSeries = () => {
    setIsFreeOn(!isfreeOn)
  }

  const onClickAllSeries = () => {
    setSeriesMenu('')
    setIsShowAll(true)
    setCountIndex(-1)
  }

  const onClickCategory = (value: any, index: number) => () => {
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
