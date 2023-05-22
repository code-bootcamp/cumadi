import { gql, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

const FETCH_POSTS = gql`
  query fetchPosts {
    fetchPosts {
      tags {
        tagId
        name
      }
    }
  }
`
export const usePopulateTags = () => {
  const { data } = useQuery(FETCH_POSTS)
  const [uniqueTags, setUniqueTags] = useState()

  useEffect(() => {
    const allTagsFromPosts = data?.fetchPosts.flatMap((post: { tags: any }) => post.tags)
    const tagIds = allTagsFromPosts?.map(({ tagId }: any) => tagId)
    const uniqueTags = allTagsFromPosts?.filter(({ tagId }: any, index: number) => !tagIds.includes(tagId, index + 1))
    setUniqueTags(uniqueTags)
  }, [data])

  return uniqueTags
}
