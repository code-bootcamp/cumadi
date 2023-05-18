import { gql } from "@apollo/client";

export const FETCH_POSTS_OF_MINE = gql`
    query fetchPostsOfMine {
        fetchPostsOfMine {
            postId
            title
        }
    }
`