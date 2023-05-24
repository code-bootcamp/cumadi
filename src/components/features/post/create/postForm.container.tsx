import { useEffect, useRef, useState } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@apollo/client'
import { InputRef } from 'antd'
import dynamic from 'next/dynamic'
import _ from 'lodash'
import { accessTokenState, postFormState, tempPostIdState } from '@/common/store'
import PostFormUI from './postForm.presenter'
import { CREATE_POST, FETCH_POSTS, UPDATE_POST } from './postForm.queries'
import { IPostFormProps } from './postForm.types'
import { IMutation, IMutationCreatePostArgs, IMutationUpdatePostArgs } from '@/common/types/generated/types'
import { useConfirmBeforeReroute } from '@/common/hooks/useConfirmBeforeReroute'
import { useFillPostFormsFromRouter } from '@/common/hooks/useFillPostFormsFromRouter'

const DynamicImportEditor = dynamic(() => import('@/components/common/markdownEditor/markdownEditor.container'), {
  ssr: false,
})

export default function PostForm({ isEditMode }: IPostFormProps) {
  const router = useRouter()

  const inputRef = useRef<InputRef>(null)
  const editorRef = useRef<any>(null)

  const [accessToken] = useRecoilState(accessTokenState)
  const [post, setPost] = useRecoilState(postFormState)
  const resetPost = useResetRecoilState(postFormState)
  const [, setTempPostId] = useRecoilState(tempPostIdState)
  const resetTempPostId = useResetRecoilState(tempPostIdState)
  const [searchString, setSearchString] = useState('')
  const [tags, setTags] = useState<any>([])
  const [isAddTagOptionVisible, setIsAddTagOptionVisible] = useState(false)
  const [isRouterChangable, setIsRouterChangable] = useState(false)

  const API_HEADERS = {
    authorization: typeof window !== undefined ? `Bearer ${accessToken}` : '',
    'Content-Type': 'application/json',
  }

  const { data } = useQuery(FETCH_POSTS)

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

  const { postForm } = useFillPostFormsFromRouter()

  useConfirmBeforeReroute()

  useEffect(() => {
    const allTagsFromPosts = data?.fetchPosts.flatMap((post: { tags: any }) => post.tags)
    const tagIds = allTagsFromPosts?.map(({ tagId }: any) => tagId)
    const uniqueTags = allTagsFromPosts?.filter(({ tagId }: any, index: number) => !tagIds.includes(tagId, index + 1))
    setTags(uniqueTags?.map((el: { name: any }) => el.name))
  }, [data])

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
      if (tags.filter((item: string) => item.includes(searchString))) setIsAddTagOptionVisible(true)
    }
  }, [searchString])

  const handleSearchChange = (value: string) => {
    setSearchString(value)
  }

  const filterOption = (input: string, option: any) => {
    return option.label.includes(input)
  }

  const handleClickAddTag = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const tempTags = [...tags]
    e.preventDefault()
    setTags([searchString, ...tempTags])
    setSearchString('')

    setTimeout(() => {
      inputRef.current?.focus()
    }, 0)
  }

  const handleClickCancelEditPost = () => {
    resetPost()
    resetTempPostId()
    router.back()
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
      handleClickCancelEditPost={handleClickCancelEditPost}
      handleSubmitForm={handleSubmitForm}
      DynamicImportEditor={DynamicImportEditor}
      editorRef={editorRef}
      form={postForm}
    />
  )
}
