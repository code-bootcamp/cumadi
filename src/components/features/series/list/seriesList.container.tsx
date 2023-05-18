import { gql, useQuery } from "@apollo/client";
import SeriesListUI from "./seriesList.presenter";
import { useEffect } from "react";

const FETCH_SERIES_ALL = gql`
  query fetchSeriesAll {
    fetchSeriesAll {
      seriesId
      title
      introduction
      image
      price
      createdAt
      category{
        categoryId
        name
      }
      user{
        userId
        nickname
      }
    }
  }
`

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
