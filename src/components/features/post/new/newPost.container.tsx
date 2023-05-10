import { useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { InputRef } from 'antd'
import _ from 'lodash'
import { newPostState, tagsState } from '@/common/store'
import NewPostUI from './newPost.presenter'
import { useConfirmBeforeReroute } from '@/common/hooks/useConfirmBeforeReroute'

const DynamicImportEditor = dynamic(() => import('@/components/common/markdownEditor/markdownEditor.container'), {
  ssr: false,
})

export default function NewPost() {
  const router = useRouter()

  const [tags, setTags] = useRecoilState(tagsState)
  const [post, setPost] = useRecoilState(newPostState)
  const [searchString, setSearchString] = useState('')
  const [isAddTagOptionVisible, setIsAddTagOptionVisible] = useState(false)

  const inputRef = useRef<InputRef>(null)
  const editorRef = useRef<any>(null)

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
      contentHTML: editorRef.current.getInstance().getHTML(),
      contentMarkdown: editorRef.current.getInstance().getMarkdown(),
    }
    setPost(postData)

    // TODO: Feed postData into API

    router.push('new/publish')
  }

  return (
    <NewPostUI
      post={post}
      tags={tags}
      handleSearchChange={handleSearchChange}
      isAddTagOptionVisible={isAddTagOptionVisible}
      handleClickAddTag={handleClickAddTag}
      searchString={searchString}
      handleSubmitForm={handleSubmitForm}
      DynamicImportEditor={DynamicImportEditor}
      editorRef={editorRef}
    />
  )
}
