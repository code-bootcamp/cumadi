import { useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { InputRef } from 'antd'
import _ from 'lodash'
import { postFormState, tagsState, tempPostIdState } from '@/common/store'
import PostFormUI from './postForm.presenter'
import { useConfirmBeforeReroute } from '@/common/hooks/useConfirmBeforeReroute'
import { useFillPostFormsFromRouter } from '@/common/hooks/useFillPostFormsFromRouter'
import { IPostFormProps } from './postForm.types'
import { useMutation } from '@apollo/client'
import { IMutation, IMutationCreatePostArgs, IMutationUpdatePostArgs } from '@/common/types/generated/types'
import { CREATE_POST, UPDATE_POST } from './postForm.queries'

const DynamicImportEditor = dynamic(() => import('@/components/common/markdownEditor/markdownEditor.container'), {
  ssr: false,
})

export default function PostForm({ isEditMode }: IPostFormProps) {
  const router = useRouter()

  const [tags, setTags] = useRecoilState(tagsState)
  const [post, setPost] = useRecoilState(postFormState)
  const [, setTempPostId] = useRecoilState(tempPostIdState)
  const [searchString, setSearchString] = useState('')
  const [isAddTagOptionVisible, setIsAddTagOptionVisible] = useState(false)

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
  const inputRef = useRef<InputRef>(null)
  const editorRef = useRef<any>(null)

  const { postForm } = useFillPostFormsFromRouter()

  useConfirmBeforeReroute()

  useEffect(() => {
    if (tags.filter(item => item.includes(searchString)).length === 0) setIsAddTagOptionVisible(true)
  }, [searchString])

  const handleSearchChange = (value: string) => {
    setSearchString(value)
  }

  const handleClickAddTag = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault()
    setTags([...tags, searchString])
    setSearchString('')

    setTimeout(() => {
      inputRef.current?.focus()
    }, 0)
  }

  const handleSubmitForm = async (values: any) => {
    let filledValuesFromPost = { ...values }
    if (post) {
      for (const [key, value] of Object.entries(filledValuesFromPost)) {
        if (!value) filledValuesFromPost[key as keyof typeof post] = post[key as keyof typeof post]
      }
    }

    const postData = {
      ...filledValuesFromPost,
      content: editorRef.current.getInstance().getMarkdown(),
    }

    try {
      setPost(postData)

      if (isEditMode) {
        const result = await updatePost({
          variables: {
            postId: router.query.postId as string,
            updatePostInput: {
              title: postData.title,
              content: postData.content,
              tags: postData.tags,
            },
          },
        })
        router.push(`/post/${result.data?.updatePost.postId}/edit/publish`)
      } else {
        const result = await createPost({
          variables: {
            createPostInput: { title: postData.title, content: postData.content, tags: postData.tags },
          },
        })
        setTempPostId(result.data?.createPost.postId as string)
        router.push('new/publish')
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }

  return (
    <PostFormUI
      isEditMode={isEditMode}
      post={post}
      tags={tags}
      handleSearchChange={handleSearchChange}
      isAddTagOptionVisible={isAddTagOptionVisible}
      handleClickAddTag={handleClickAddTag}
      searchString={searchString}
      handleSubmitForm={handleSubmitForm}
      DynamicImportEditor={DynamicImportEditor}
      editorRef={editorRef}
      form={postForm}
    />
  )
}
