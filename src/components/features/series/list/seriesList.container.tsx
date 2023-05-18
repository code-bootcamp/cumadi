import { useQuery } from "@apollo/client";
import SeriesListUI from "./seriesList.presenter";
import { FETCH_SERIES_ALL, FETCH_SERIES_BY_CATEGORY, FETCH_SERIES_CATEGORIES } from "./seriesList.query";
import { useState } from "react";

export default function SeriesList() {
  const [seriesMenu, setSeriesMenu] = useState("");
  const [isShowAll, setIsShowAll] = useState(true);
  const [countIndex, setCountIndex] = useState(-1);

  const { data } = useQuery(FETCH_SERIES_ALL);
  const { data: category } = useQuery(FETCH_SERIES_CATEGORIES);
  const { data: menu } = useQuery(FETCH_SERIES_BY_CATEGORY, {
    variables: { categoryId: seriesMenu },
  })

  const onClickAllSeries = () => {
    setSeriesMenu("");
    setIsShowAll(true);
    setCountIndex(-1)
  }

  const onClickCategory = (value: any, index: number) => () => {
    setSeriesMenu(value)
    setIsShowAll(false);
    setCountIndex(index);
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
          onClickCategory={onClickCategory}
          onClickAllSeries={onClickAllSeries}
        />
    </>
  ) 
}
