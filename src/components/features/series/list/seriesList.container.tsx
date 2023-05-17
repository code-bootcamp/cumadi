import { useQuery } from "@apollo/client";
import SeriesListUI from "./seriesList.presenter";
import { FETCH_SERIES_ALL, FETCH_SERIES_BY_CATEGORY, FETCH_SERIES_CATEGORIES } from "./seriesList.query";
import { useState } from "react";

export default function SeriesList() {
  const { data, refetch } = useQuery(FETCH_SERIES_ALL);
  const { data: category } = useQuery(FETCH_SERIES_CATEGORIES);
  const [seriesMenu, setSeriesMenu] = useState("");
  const [allSeries, setAllSeries] = useState(true);

  const onClickAllSeries = () => {
    setSeriesMenu("");
    setAllSeries(true);
  }

  const onClickCategory = (value: any) => () => {
    setSeriesMenu(value)
    setAllSeries(false);
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
          onClickCategory={onClickCategory}
          onClickAllSeries={onClickAllSeries}
        />
    </>
  ) 
}
