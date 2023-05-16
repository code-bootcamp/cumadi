import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { Form } from 'antd'
import { postFormState } from '../store'
import { postItem } from '@/common/dummyData/post'

export const useFillPostFormsFromRouter = () => {
  const router = useRouter()
  const [postForm] = Form.useForm()
  const [publishForm] = Form.useForm()
  const [, setPost] = useRecoilState(postFormState)

  useEffect(() => {
    const postFromRouter = postItem.find(item => item.id === router.query.postId)
    console.log('post from router', postFromRouter)

    if (postFromRouter) {
      setPost(postFromRouter)
      postForm.setFieldsValue({
        title: postFromRouter.title,
        tags: postFromRouter.tags,
        content: postFromRouter.content,
      })
      publishForm.setFieldsValue({
        thumbnail: postFromRouter.image,
        description: postFromRouter.description,
        series: postFromRouter.series,
      })
    }
  }, [router.isReady])

  return { postForm, publishForm }
}
