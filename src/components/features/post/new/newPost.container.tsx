import { useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import NewPostUI from './newPost.presenter'

const DynamicImportEditor = dynamic(() => import('@/components/common/markdownEditor/markdownEditor.container'), {
  ssr: false,
})

export default function NewPost() {
  const ref = useRef<any>(null)
  const [content, setContent] = useState<string>('')
  // const [newPost, setNewPost] = useRecoilState(newPostState)

  const handleSubmitForm = (values: any) => {
    setContent(ref.current.getInstance().getHTML())
    const postData = { ...values, content }
    console.log(postData)

    // setNewPost(postData)
    // console.log(newPost)
    // TODO: Feed postData into API
  }

  return <NewPostUI handleSubmitForm={handleSubmitForm} DynamicImportEditor={DynamicImportEditor} editorRef={ref} />
}
