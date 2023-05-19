import { ChangeEvent, useRef, useState } from 'react'
import NewSeriesUI from './newSeries.presenter'
import { useRouter } from 'next/router'
import { Input, Tag, Select } from 'antd'

const options = [
  { value: '포스트 1' },
  { value: '포스트 2' },
  { value: '포스트 3' },
  { value: '포스트 4' },
  { value: '포스트 5' },
  { value: '포스트 6' },
]

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
  const imgRef = useRef<HTMLInputElement>(null)
  const [thumbnail, setThumbnail] = useState<string>()
  const router = useRouter();
  const [input, setInput] = useState(false);
  const { TextArea } = Input;

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

  return (
    <NewSeriesUI
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
    />
  )
}