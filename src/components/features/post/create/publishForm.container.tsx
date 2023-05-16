import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Input, message } from 'antd'
import { useRecoilState } from 'recoil'
import { accessTokenState, postFormState } from '@/common/store'
import { useFillPostFormsFromRouter } from '@/common/hooks/useFillPostFormsFromRouter'
import PublishFormUI from './publishForm.presenter'
import { IPublishFormProps } from './publishForm.types'
import { useMutation } from '@apollo/client'
import { CREATE_POST, UPDATE_POST } from './postForm.queries'
import { useRouter } from 'next/router'
import { IMutation, IMutationCreatePostArgs, IMutationUpdatePostArgs } from '@/common/types/generated/types'

const dummyDataSeries = [
  { id: '', title: '시리즈 없음' },
  { id: '1', title: 'series 1' },
  { id: '2', title: 'series 2' },
  { id: '3', title: 'series 3' },
]

export default function PublishForm({ isEditMode }: IPublishFormProps) {
  const router = useRouter()
  const [post] = useRecoilState(postFormState)
  const fileRef = useRef<HTMLInputElement>(null)
  const [thumbnailUrl, setThumbnailUrl] = useState<string>()
  const [messageApi] = message.useMessage()

  const API_HEADERS = {
    authorization: typeof window !== undefined ? `Bearer ${window.localStorage.getItem('accessToken')}` : '',
    'Content-Type': 'application/json',
  }

  const [createPost] = useMutation<Pick<IMutation, 'createPost'>, IMutationCreatePostArgs>(CREATE_POST, {
    context: {
      headers: API_HEADERS,
    },
  })

  const [updatePost] = useMutation<Pick<IMutation, 'updatePost'>, IMutationUpdatePostArgs>(UPDATE_POST, {
    context: {
      headers: API_HEADERS,
    },
  })

  const { publishForm } = useFillPostFormsFromRouter()

  const { TextArea } = Input

  const handleClickUploadHandler = () => {
    fileRef.current?.click()
  }

  const handleChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (!file) return

    // TODO: try-catch with upload to Server

    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = event => {
      if (typeof event.target?.result === 'string') {
        setThumbnailUrl(event.target?.result)
      }
    }
  }

  const handleSubmitForm = async (values: any) => {
    // TODO: replace thumbnail:thumbnailUrl with actual server url
    const publishablePostData = { ...post, ...values }
    try {
      const postInput = {
        title: publishablePostData.title,
        content: publishablePostData.content,
        seriesId: publishablePostData.series,
        tags: publishablePostData.tags,
      }
      if (isEditMode) {
        console.log('hello its edit', publishablePostData.id)
        const result = await updatePost({
          variables: {
            postId: publishablePostData.id,
            updatePostInput: postInput,
          },
        })
        messageApi.open({
          type: 'success',
          content: '포스트가 성공적으로 수정되었습니다.',
        })
        router.push(`/post/${result.data?.updatePost.postId}`)
      } else {
        const result = await createPost({
          variables: {
            createPostInput: postInput,
          },
        })
        messageApi.open({
          type: 'success',
          content: '포스트가 성공적으로 출간되었습니다.',
        })
        router.push(`/post/${result.data?.createPost.postId}`)
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }

  return (
    <PublishFormUI
      isEditMode={isEditMode}
      fileRef={fileRef}
      thumbnailUrl={post.image ? post.image : thumbnailUrl}
      TextArea={TextArea}
      handleSubmitForm={handleSubmitForm}
      handleClickUploadHandler={handleClickUploadHandler}
      handleChangeFile={handleChangeFile}
      series={dummyDataSeries}
      form={publishForm}
    />
  )
}
