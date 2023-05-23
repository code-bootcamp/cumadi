import { gql } from "@apollo/client";

export const FETCH_POSTS_OF_MINE = gql`
  query fetchPostsOfMine {
    fetchPostsOfMine {
      postId
      title
    }
  }
`;

export const FETCH_SERIES_CATEGORIES = gql`
  query fetchSeriesCategories {
    fetchSeriesCategories {
      categoryId
      name
    }
  }
`;

export const CREATE_SERIES = gql`
  mutation createSeries($createSeriesInput: CreateSeriesInput!) {
    createSeries(createSeriesInput: $createSeriesInput) {
      seriesId
    }
  }
`;

export const UPDATE_SERIES = gql`
  mutation updateSeries(
    $seriesId: String!
    $updateSeriesInput: UpdateSeriesInput!
  ) {
    seriesId
  }
`;

export const FETCH_SERIES = gql`
  query fetchSeries($seriesId: String!) {
    fetchSeries(seriesId: $seriesId) {
      seriesId
      title
      introduction
      price
      createdAt
      updatedAt
      category {
        categoryId
        name
      }
      user {
        userId
        nickname
      }
      post {
        postId
        title
        content
        image
        description
        createdAt
        user {
          userId
          email
          nickname
        }
      }
    }
  }
`;
