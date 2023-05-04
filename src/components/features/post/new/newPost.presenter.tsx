import { useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { Form, Input, Select } from 'antd'
import * as S from './newPost.styles'
import { MyButton } from '@/components/common/customComponent.styles'

const DynamicImportEditor = dynamic(() => import('@/components/common/markdownEditor/markdownEditor.container'), {
  ssr: false,
})

export default function NewPostUI() {
  const ref = useRef<any>(null)
  const [content, setContent] = useState<string>('')

  const handleSubmitForm = (values: any) => {
    setContent(ref.current.getInstance().getHTML())
    const postData = { ...values, content }
    console.log(postData)
    // TODO: Feed postData into API
  }

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>새 포스트 작성</S.Title>
      </S.TitleWrapper>

      <S.PostForm onFinish={handleSubmitForm}>
        <Form.Item name="title" rules={[{ required: true, message: '제목을 적어주세요.' }]}>
          <Input type="primary" placeholder="제목" />
        </Form.Item>
        <Form.Item name="category" rules={[{ required: true, message: '카테고리를 정해주세요.' }]}>
          <Select
            placeholder="카테고리"
            style={{ width: '100%' }}
            options={[
              { value: '개발', label: '개발' },
              { value: '디자인', label: '디자인' },
              { value: '여행', label: '여행' },
              { value: '에세이', label: '에세이' },
            ]}
          />
        </Form.Item>
        <Form.Item>
          <DynamicImportEditor editorRef={ref} content="" />
        </Form.Item>
        <Form.Item>
          <S.ButtonWrapper>
            <MyButton type="primary" htmlType="submit" style={{ margin: 'auto' }}>
              포스트 올리기
            </MyButton>
          </S.ButtonWrapper>
        </Form.Item>
      </S.PostForm>
    </S.Container>
  )
}
