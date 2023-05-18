import { ChangeEvent, useRef, useState } from 'react'
import NewSeriesUI from './newSeries.presenter'
import { useRouter } from 'next/router'
import { Input, Tag } from 'antd'
import { useQuery } from '@apollo/client'
import { FETCH_POSTS_OF_MINE, FETCH_SERIES_CATEGORIES } from './newSeries.query'

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
  const [thumbnail, setThumbnail] = useState<string>("")
  const [input, setInput] = useState(false)
  
  const { TextArea } = Input
  
  const { data: post } = useQuery(FETCH_POSTS_OF_MINE)
  const { data: category } = useQuery(FETCH_SERIES_CATEGORIES);

  const postOptions = post?.fetchPostsOfMine.map(el => {
    return { value: el.title }
  })
  const categoryOptions = category?.fetchSeriesCategories.map(el => {
    return { value: el.name, label: el.name }
  })

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
      postOptions={postOptions}
      categoryOptions={categoryOptions}
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