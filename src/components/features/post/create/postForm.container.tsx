import { useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { InputRef } from 'antd'
import _ from 'lodash'
import { accessTokenState, postFormState, tagsState, tempPostIdState } from '@/common/store'
import PostFormUI from './postForm.presenter'
import { useConfirmBeforeReroute } from '@/common/hooks/useConfirmBeforeReroute'
import { useFillPostFormsFromRouter } from '@/common/hooks/useFillPostFormsFromRouter'
import { IPostFormProps } from './postForm.types'
import { gql, useMutation, useQuery } from '@apollo/client'
import { IMutation, IMutationCreatePostArgs, IMutationUpdatePostArgs } from '@/common/types/generated/types'
import { CREATE_POST, UPDATE_POST } from './postForm.queries'
import { usePopulateTags } from '@/common/hooks/usePopulateTags'

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
  const [isRouterChangable, setIsRouterChangable] = useState(false)
  const [accessToken] = useRecoilState(accessTokenState)

  const API_HEADERS = {
    authorization: typeof window !== undefined ? `Bearer ${accessToken}` : '',
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

  const uniqueTags = usePopulateTags()
  if (uniqueTags) setTags(uniqueTags)
  console.log(uniqueTags)

  useEffect(() => {
    if (isRouterChangable) {
      if (isEditMode) router.push(`/post/${post.postId}/edit/publish`)
      else router.push('new/publish')
    }
    return () => {
      setIsRouterChangable(false)
    }
  }, [isRouterChangable])

  useEffect(() => {
    if (searchString.length === 0) setIsAddTagOptionVisible(false)
    else {
      if (tags.filter(item => item.name.includes(searchString))) setIsAddTagOptionVisible(true)
    }
  }, [searchString])

  const handleSearchChange = (value: string) => {
    setSearchString(value)
  }

  const filterOption = (input: string, option: any) => {
    return option.label.includes(input)
  }

  const handleClickAddTag = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault()

    setTags([...tags, { id: searchString, name: searchString }])
    console.log('clicked', tags)
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
      setIsRouterChangable(true)

      if (isEditMode) {
        await updatePost({
          variables: {
            postId: router.query.postId as string,
            updatePostInput: {
              title: postData.title,
              content: postData.content,
              tags: postData.tags,
              image: postData.image,
              description: postData.description,
              seriesId: postData.seriesId,
            },
          },
        })

        // router.push(`/post/${result.data?.updatePost.postId}/edit/publish`)
      } else {
        const result = await createPost({
          variables: {
            createPostInput: {
              title: postData.title,
              content: postData.content,
              tags: postData.tags,
              image: '',
              description: '',
            },
          },
        })
        setTempPostId(result.data?.createPost.postId as string)
        // router.push('new/publish')
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
      inputRef={inputRef}
      handleSearchChange={handleSearchChange}
      filterOption={filterOption}
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
