import { ChangeEvent, useRef, useState } from 'react'
import NewSeriesUI from './newSeries.presenter'
import { useRouter } from 'next/router'
import { Input, Tag } from 'antd'
import { useQuery } from '@apollo/client'
import { FETCH_POSTS_OF_MINE } from './newSeries.query'

const tagRender = (props: any) => {
  const { label, closable, onClose } = props;
  const onPreventMouseDown = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{
        marginRight: 3,
      }}
    >
      {label}
    </Tag>
  );
};

export default function NewSeries() {
  const router = useRouter()
  const imgRef = useRef<HTMLInputElement>(null)
  const { TextArea } = Input
  const [thumbnail, setThumbnail] = useState<string>("")
  const [input, setInput] = useState(false)
  
  const { data: post } = useQuery(FETCH_POSTS_OF_MINE)

  const options = post?.fetchPostsOfMine.map(e => {
    return {value: e.title}
  })
  console.log(options)

  const handleClickUploadThumbnail = () => {
    imgRef.current?.click()
  }

  const handleChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return;
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = event => {
        if (typeof event.target?.result === 'string') {
          setThumbnail(event.target?.result)
        }
      }
  }

  const handleSubmitForm = (values: any) => {
    console.log(values);
    alert("시리즈 작성이 완료되었습니다.")
    router.push("/");
  }
  
  const onCheckPost = (value) => {
    console.log(value);
  }

  return (
    <NewSeriesUI
      post={post}
      handleSubmitForm={handleSubmitForm}
      handleChangeFile={handleChangeFile}
      handleClickUploadThumbnail={handleClickUploadThumbnail}
      options={options}
      thumbnail={thumbnail}
      imgRef={imgRef}
      setInput={setInput}
      input={input}
      TextArea={TextArea}
      tagRender={tagRender}
      onCheckPost={onCheckPost}
    />
  )
}