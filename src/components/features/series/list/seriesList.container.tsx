import { useQuery } from "@apollo/client";
import SeriesListUI from "./seriesList.presenter";
import { FETCH_SERIES_ALL, FETCH_SERIES_BY_CATEGORY, FETCH_SERIES_CATEGORIES } from "./seriesList.query";
import { useState } from "react";

export default function SeriesList() {
  const { data, refetch } = useQuery(FETCH_SERIES_ALL);
  const { data: category } = useQuery(FETCH_SERIES_CATEGORIES);
  const [seriesMenu, setSeriesMenu] = useState("");
  const [allSeries, setAllSeries] = useState(true);
  const [countIndex, setCountIndex] = useState(1000);

  const onClickAllSeries = () => {
    setSeriesMenu("");
    setAllSeries(true);
    setCountIndex(1000)
  }

  const onClickCategory = (value: any, index: number) => () => {
    setSeriesMenu(value)
    setAllSeries(false);
    setCountIndex(index);
  }
  const { data: menu } = useQuery(FETCH_SERIES_BY_CATEGORY, {
    variables: { categoryId: seriesMenu },
  })

  return (
    <>
        <SeriesListUI
          category={category}
          data={data}
          menu={menu}
          allSeries={allSeries}
          seriesMenu={seriesMenu}
          countIndex={countIndex}
          onClickCategory={onClickCategory}
          onClickAllSeries={onClickAllSeries}
        />
    </>
  ) 
}
