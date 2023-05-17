import { useQuery } from "@apollo/client";
import SeriesListUI from "./seriesList.presenter";
import { FETCH_SERIES_ALL, FETCH_SERIES_CATEGORIES } from "./seriesList.query";
import { useState } from "react";

export default function SeriesList() {
  const { data, refetch } = useQuery(FETCH_SERIES_ALL);
  const { data: category } = useQuery(FETCH_SERIES_CATEGORIES);
  const [click, setClick] = useState();

  const onClickCategory = (value: any) => () => {
    console.log(value);
  }

  return (
    <>
        <SeriesListUI
          category={category}
          data={data}
          onClickCategory={onClickCategory}
        />
    </>
  ) 
}
