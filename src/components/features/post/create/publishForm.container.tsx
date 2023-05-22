import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Input, message, Modal } from 'antd'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { accessTokenState, postFormState, tempPostIdState } from '@/common/store'
import { useFillPostFormsFromRouter } from '@/common/hooks/useFillPostFormsFromRouter'
import PublishFormUI from './publishForm.presenter'
import { IPublishFormProps } from './publishForm.types'
import { useMutation, useQuery } from '@apollo/client'
import { UPDATE_POST } from './postForm.queries'
import { useRouter } from 'next/router'
import {
  IMutation,
  IMutationUpdatePostArgs,
  IMutationUploadImageArgs,
  IQuery,
  ISeries,
} from '@/common/types/generated/types'
import { FETCH_SERIES_BY_USER, UPLOAD_IMAGE } from './publishForm.queries'

export default function PublishForm({ isEditMode }: IPublishFormProps) {
  const router = useRouter()
  const [tempPostId] = useRecoilState(tempPostIdState)
  const [post, setPost] = useRecoilState(postFormState)
  const fileRef = useRef<HTMLInputElement>(null)
  const [thumbnailUrl, setThumbnailUrl] = useState<string>()
  const [messageApi] = message.useMessage()
  const [isRouterChangable, setIsRouterChangable] = useState(false)
  const [series, setSeries] = useState<Array<ISeries>>()
  const [accessToken] = useRecoilState(accessTokenState)
  const resetPost = useResetRecoilState(postFormState)
  const resetTempPostId = useResetRecoilState(tempPostIdState)

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

  const handleSubmitForm = async (values: any) => {
    const publishablePostData = { ...post, ...values }

    try {
      const postInput = {
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
      thumbnailUrl={post.image ? post.image : thumbnailUrl}
      TextArea={TextArea}
      handleSubmitForm={handleSubmitForm}
      handleClickUploadHandler={handleClickUploadHandler}
      handleChangeFile={handleChangeFile}
      series={series}
      form={publishForm}
    />
  )
}
