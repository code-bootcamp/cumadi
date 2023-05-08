import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import NewPostUI from './newPost.presenter'
import { InputRef } from 'antd'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { newPost } from '@/common/store'

const DynamicImportEditor = dynamic(() => import('@/components/common/markdownEditor/markdownEditor.container'), {
  ssr: false,
})

export default function NewPost() {
  const router = useRouter()

  const [, setPost] = useRecoilState(newPost)
  const [tags, setTags] = useState(['jack', 'lucy'])
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
    console.log(tags, searchString)

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
