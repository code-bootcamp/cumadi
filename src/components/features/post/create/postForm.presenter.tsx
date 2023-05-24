import { Divider, Form, Input, Select } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import * as S from './postForm.styles'
import { MyButton } from '@/components/common/customComponent.styles'
import { PostFormUIProps } from './postForm.types'

export default function PostFormUI(props: PostFormUIProps) {
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>{props.isEditMode ? '포스트 수정' : '포스트 작성'}</S.Title>
      </S.TitleWrapper>

      <S.MyForm onFinish={props.handleSubmitForm} form={props.form}>
        <Form.Item name="title" rules={[{ required: props.post.title ? false : true, message: '제목을 적어주세요.' }]}>
          <Input type="primary" placeholder="제목" value={props.post ? props.post.title : ''} />
        </Form.Item>

        <Form.Item name="tags" rules={[{ required: props.post.tags ? false : true, message: '태그를 정해주세요.' }]}>
          <Select
            mode="multiple"
            ref={props.inputRef}
            placeholder="태그를 정해주세요."
            allowClear
            onSearch={props.handleSearchChange}
            filterOption={props.filterOption}
            dropdownRender={menu => (
              <>
                {menu}
                {props.isAddTagOptionVisible ? (
                  <>
                    <Divider style={{ margin: '0.5rem 0' }} />
                    <div style={{ padding: '0 0.5rem 0.25rem' }}>
                      <MyButton type="text" icon={<PlusOutlined />} onClick={props.handleClickAddTag}>
                        #{props.searchString} 추가하기
                      </MyButton>
                    </div>
                  </>
                ) : null}
              </>
            )}
            options={props.tags?.map(tag => ({ label: `#${tag}`, value: tag }))}
          />
        </Form.Item>

        <Form.Item style={{ backgroundColor: 'white' }}>
          <props.DynamicImportEditor
            editorRef={props.editorRef}
            content={props.post.content ? props.post.content : ''}
          />
        </Form.Item>

        <Form.Item>
          <S.ButtonWrapper>
            {props.isEditMode ? (
              <MyButton htmlType="button" onClick={props.handleClickCancelEditPost}>
                수정 취소하기
              </MyButton>
            ) : null}
            <MyButton type="primary" htmlType="submit">
              포스트 출간하기
            </MyButton>
          </S.ButtonWrapper>
        </Form.Item>
      </S.MyForm>
    </S.Container>
  )
}
