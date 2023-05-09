import { ChangeEvent, useRef, useState } from 'react'
import NewSeriesUI from './newSeries.presenter'
import { useRouter } from 'next/router'

const dummyDataPosts = [
    { id: '1', title: '포스트1' },
    { id: '2', title: '포스트2' },
    { id: '3', title: '포스트3' },
  ]

export default function NewSeries() {
  const fileRef = useRef<HTMLInputElement>(null)
  const [thumbnailUrl, setThumbnailUrl] = useState<string>()
  const router = useRouter();
  
  const handleClickUploadHandler = () => {
    fileRef.current?.click()
  }

  const handleChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (!file) return

    // TODO: try-catch with upload to Server

    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = event => {
      if (typeof event.target?.result === 'string') {
        setThumbnailUrl(event.target?.result)
      }
    }
  }

  const handleSubmitForm = (values: any) => {
    console.log(values);
    alert("시리즈 작성이 완료되었습니다.")
    router.push("/");
  }

  return (
    <NewSeriesUI
      handleSubmitForm={handleSubmitForm}
      handleChangeFile={handleChangeFile}
      handleClickUploadHandler={handleClickUploadHandler}
      posts={dummyDataPosts}
      thumbnailUrl={thumbnailUrl}
      fileRef={fileRef}
    />
  )
}