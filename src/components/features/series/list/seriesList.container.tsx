import { useQuery } from "@apollo/client";
import SeriesListUI from "./seriesList.presenter";
import { FETCH_SERIES_ALL, FETCH_SERIES_CATEGORIES } from "./seriesList.query";

export default function SeriesList() {
  const { data, refetch } = useQuery(FETCH_SERIES_ALL);
  const { data: category } = useQuery(FETCH_SERIES_CATEGORIES);

  return (
    <>
        <SeriesListUI
          category={category}
          data={data}
        />
    </>
  ) 
}
