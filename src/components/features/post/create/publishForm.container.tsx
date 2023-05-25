import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { useMutation, useQuery } from '@apollo/client'
import { Input, message, Modal } from 'antd'
import { useRouter } from 'next/router'

import { accessTokenState, postFormState, tempPostIdState } from '@/common/store'
import PublishFormUI from './publishForm.presenter'
import { UPDATE_POST } from './postForm.queries'
import { FETCH_SERIES_BY_USER, UPLOAD_IMAGE, FETCH_POST } from './publishForm.queries'
import { IPublishFormProps } from './publishForm.types'
import {
  IMutation,
  IMutationUpdatePostArgs,
  IMutationUploadImageArgs,
  IQuery,
  ISeries,
} from '@/common/types/generated/types'
import { useFillPostFormsFromRouter } from '@/common/hooks/useFillPostFormsFromRouter'

export default function PublishForm({ isEditMode }: IPublishFormProps) {
  const router = useRouter()

  const fileRef = useRef<HTMLInputElement>(null)

  const [accessToken] = useRecoilState(accessTokenState)
  const [post] = useRecoilState(postFormState)
  const resetPost = useResetRecoilState(postFormState)
  const [tempPostId] = useRecoilState(tempPostIdState)
  const resetTempPostId = useResetRecoilState(tempPostIdState)
  const [thumbnailUrl, setThumbnailUrl] = useState<string>()
  const [messageApi] = message.useMessage()
  const [isRouterChangable, setIsRouterChangable] = useState(false)
  const [series, setSeries] = useState<Array<ISeries>>()

  const API_HEADERS = {
    authorization: typeof window !== undefined ? `Bearer ${accessToken}` : '',
    'Content-Type': 'application/json',
  }

  const { data } = useQuery<Pick<IQuery, 'fetchSeriesByUser'>>(FETCH_SERIES_BY_USER, {
    context: {
      headers: API_HEADERS,
    },
  })

  const [updatePost] = useMutation<Pick<IMutation, 'updatePost'>, IMutationUpdatePostArgs>(UPDATE_POST, {
    context: {
      headers: API_HEADERS,
    },
  })

  const [uploadImage] = useMutation<Pick<IMutation, 'uploadImage'>, IMutationUploadImageArgs>(UPLOAD_IMAGE)

  useEffect(() => {
    if (post.image) setThumbnailUrl(post.image)
  }, [])

  useEffect(() => {
    setSeries(data?.fetchSeriesByUser)
  }, [data])

  useEffect(() => {
    if (isRouterChangable) {
      router.push(`/post/${post.postId}`)
    }
    return () => {
      setIsRouterChangable(false)
    }
  }, [isRouterChangable])

  const { publishForm } = useFillPostFormsFromRouter()

  const { TextArea } = Input

  const handleClickUploadHandler = () => {
    fileRef.current?.click()
  }

  const handleChangeFile = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = event.target.files?.[0]

    try {
      const uploadimageResult = await uploadImage({ variables: { file } })
      setThumbnailUrl(uploadimageResult.data?.uploadImage)
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  const handleClickCancelEditPublish = () => {
    setIsRouterChangable(true)
    resetPost()
    resetTempPostId()
  }

  const handleSubmitForm = async (values: any) => {
    const formattedTags = post.tags?.map((tag: { name: any }) => tag.name)
    const publishablePostData = { ...post, ...values }

    try {
      const postInput = {
        tags: formattedTags,
        image: thumbnailUrl,
        description: publishablePostData.description,
        seriesId: publishablePostData.seriesId,
      }

      if (isEditMode) {
        await updatePost({
          variables: {
            postId: publishablePostData.postId,
            updatePostInput: postInput,
          },
          refetchQueries: [{ query: FETCH_POST, variables: { postId: publishablePostData.postId } }],
        })

        messageApi.open({
          type: 'success',
          content: '포스트가 성공적으로 수정되었습니다.',
        })
      } else {
        await updatePost({
          variables: {
            postId: tempPostId,
            updatePostInput: postInput,
          },
          refetchQueries: [{ query: FETCH_POST, variables: { postId: publishablePostData.postId } }],
        })

        messageApi.open({
          type: 'success',
          content: '포스트가 성공적으로 출간되었습니다.',
        })
      }
      setIsRouterChangable(true)
      resetPost()
      resetTempPostId()
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }

  return (
    <PublishFormUI
      isEditMode={isEditMode}
      fileRef={fileRef}
      thumbnailUrl={thumbnailUrl}
      TextArea={TextArea}
      handleClickUploadHandler={handleClickUploadHandler}
      handleChangeFile={handleChangeFile}
      handleClickCancelEditPublish={handleClickCancelEditPublish}
      handleSubmitForm={handleSubmitForm}
      series={series}
      form={publishForm}
    />
  )
}
