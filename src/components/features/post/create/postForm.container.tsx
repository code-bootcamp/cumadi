import { useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { Form, InputRef } from 'antd'
import _ from 'lodash'
import { postFormState, tagsState } from '@/common/store'
import PostFormUI from './postForm.presenter'
import { useConfirmBeforeReroute } from '@/common/hooks/useConfirmBeforeReroute'
import { useFillPostFormsFromRouter } from '@/common/hooks/useFillPostFormsFromRouter'

const DynamicImportEditor = dynamic(() => import('@/components/common/markdownEditor/markdownEditor.container'), {
  ssr: false,
})

interface IPostFormProps {
  isEditMode: boolean
}

interface IPost {
  id: string
  name: string
  title: string
  contents: string
  image: string
  price: number
  createDate: string
}

export default function PostForm({ isEditMode }: IPostFormProps) {
  const router = useRouter()
  console.log(router.query.postId)

  const [tags, setTags] = useRecoilState(tagsState)
  const [post, setPost] = useRecoilState(postFormState)
  const [searchString, setSearchString] = useState('')
  const [isAddTagOptionVisible, setIsAddTagOptionVisible] = useState(false)

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

  const handleSubmitForm = (values: any) => {
    let filledValuesFromPost = { ...values }
    if (post) {
      for (const [key, value] of Object.entries(filledValuesFromPost)) {
        if (!value) filledValuesFromPost[key as keyof typeof post] = post[key as keyof typeof post]
      }
    }

    const postData = {
      ...filledValuesFromPost,
      contents: editorRef.current.getInstance().getMarkdown(),
    }
    setPost(postData)

    // TODO: Feed postData into API
    router.query.postId ? router.push(`/post/${router.query.postId}/edit/publish`) : router.push('new/publish')
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
