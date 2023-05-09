import { Form, Input, Select, Switch } from 'antd'
import * as S from './newSeries.styles'
import { MyButton } from '@/components/common/customComponent.styles'
import TextArea from 'antd/es/input/TextArea';
import { useState } from 'react';

export default function NewSeriesUI(props : any) {
  const [input, setInput] = useState(true);
  console.log(input);
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>새 시리즈 만들기</S.Title>
      </S.TitleWrapper>

      <S.PostForm onFinish={props.handleSubmitForm}>
        <S.Name>이름</S.Name>
        <Form.Item name="title" rules={[{ required: true, message: '시리즈 이름을 지어주세요.' }]}>
          <Input type="primary" placeholder="시리즈 이름을 지어주세요." />
        </Form.Item>
        <S.Name>썸네일</S.Name>
        <Form.Item name="thumbnail">
          <div>
            <S.ThumbnailUploadHandler onClick={props.handleClickUploadHandler} backgroundUrl={props.thumbnailUrl}>
              <MyButton>썸네일 업로드</MyButton>
            </S.ThumbnailUploadHandler>
            <input
              ref={props.fileRef}
              type="file"
              style={{ display: 'none' }}
              onChange={props.handleChangeFile}
              accept="image/*"
            />
          </div>
        </Form.Item>
        <S.Name>소개</S.Name>
        <Form.Item name="intro" rules={[{ required: true, message: '시리즈 소개를 작성해주세요.' }]}>
          <TextArea
            style={{ width: "100%", minHeight: "6rem" }}
            placeholder='좋은 소개글은 사람들의 이목을 끌어모아요!'
          />
        </Form.Item>
        <S.Name>카테고리</S.Name>
        <Form.Item name="category" rules={[{ required: true, message: '카테고리를 정해주세요.' }]}>
          <Select
            placeholder="카테고리"
            style={{ width: '100%' }}
            options={[
              { value: '개발', label: '개발' },
              { value: '에세이', label: '에세이' },
              { value: '독서', label: '독서' },
            ]}
          />
        </Form.Item>
        <S.Name>포스트 추가하기</S.Name>
        <Form.Item name="posts" rules={[{ required: true, message: '포스트를 추가해주세요.' }]}>
          <Select
            placeholder="포스트 선택하기"
            style={{ width: '100%' }}
            options={props.posts.map((posts: { title: any; id: any }) => ({ label: posts.title, value: posts.id }))}
          />
        </Form.Item>
        <S.PriceToggle>
          <S.Name>포스트 가격</S.Name>
          <S.PriceSwitch
            checked={input}
            onChange={() => {
              setInput(!input);
            }}
          />
          {input ? <div>유료로 출간하기 (3,000원)</div> : <div>무료로 출간하기</div>}
        </S.PriceToggle>
        <Form.Item>
          <S.ButtonWrapper>
            <MyButton type="primary" htmlType="submit" style={{ margin: 'auto' }}>
              시리즈 만들기
            </MyButton>
          </S.ButtonWrapper>
        </Form.Item>
      </S.PostForm>
    </S.Container>
  )
}