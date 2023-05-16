import { gql } from "graphql-request";

export const FETCH_SERIES_ALL = gql`
  query fetchSeriesAll {
    fetchSeriesAll {
      seriesId
    }
  }
`