import { useQuery } from "@apollo/client";
import SeriesListUI from "./seriesList.presenter";
import { FETCH_SERIES_ALL } from "./seriesList.query";

export default function SeriesList() {
  const { data, refetch } = useQuery(FETCH_SERIES_ALL);

  return (
    <>
        <SeriesListUI
          data={data}
        />
    </>
  ) 
}
