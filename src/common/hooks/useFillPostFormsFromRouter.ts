import { IQuery, IQueryFetchPostArgs } from './../types/generated/types'
import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { Form } from 'antd'
import { postFormState, tempPostIdState } from '../store'

export const FETCH_POST_WITH_DETAILS = gql`
  query fetchPost($postId: String!) {
    fetchPost(postId: $postId) {
      postId
      title
      content
      image
      description
      series {
        seriesId
        title
      }
      tags {
        tagId
        name
      }
    }
  }
`

export const useFillPostFormsFromRouter = () => {
  const router = useRouter()
  const [postForm] = Form.useForm()
  const [publishForm] = Form.useForm()
  const [post, setPost] = useRecoilState(postFormState)
  const [tempPostId] = useRecoilState(tempPostIdState)

  const { data } = useQuery<Pick<IQuery, 'fetchPost'>, IQueryFetchPostArgs>(FETCH_POST_WITH_DETAILS, {
    variables: {
      postId: router.query.postId ? (router.query.postId as string) : tempPostId,
    },
  })

  const postFromRouter = data?.fetchPost

  if (postFromRouter) {
    setPost(postFromRouter)
    postForm.setFieldsValue({
      title: postFromRouter.title,
      tags: postFromRouter.tags?.map(tag => tag.name),
      content: postFromRouter.content,
    })
    publishForm.setFieldsValue({
      image: postFromRouter.image,
      description: postFromRouter.description,
      seriesId: postFromRouter.series?.seriesId,
    })
  }

  return { postForm, publishForm }
}
