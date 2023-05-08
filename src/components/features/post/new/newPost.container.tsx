import { useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { InputRef } from 'antd'
import { newPostState, tagsState } from '@/common/store'
import NewPostUI from './newPost.presenter'

const DynamicImportEditor = dynamic(() => import('@/components/common/markdownEditor/markdownEditor.container'), {
  ssr: false,
})

export default function NewPost() {
  const router = useRouter()

  const [tags, setTags] = useRecoilState(tagsState)
  const [, setPost] = useRecoilState(newPostState)
  const [searchString, setSearchString] = useState('')
  const [isAddTagOptionVisible, setIsAddTagOptionVisible] = useState(false)

  const inputRef = useRef<InputRef>(null)
  const editorRef = useRef<any>(null)

  useEffect(() => {
    if (tags.filter(item => item.includes(searchString)).length === 0) setIsAddTagOptionVisible(true)
    return () => {
      setIsAddTagOptionVisible(false)
    }
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
    const postData = { ...values, content: editorRef.current.getInstance().getHTML() }
    setPost(postData)

    // TODO: Feed postData into API

    router.push('new/publish')
  }

  return (
    <NewPostUI
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
