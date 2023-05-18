import { Form, Input, Select } from 'antd'
import * as S from './newSeries.styles'
import { MyButton } from '@/components/common/customComponent.styles'

export default function NewSeriesUI(props : any) {
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
        <Form.Item name="title" rules={[{ required: true, message: '썸네일을 추가해주세요.' }]}>
            <S.Thumbnail onClick={props.handleClickUploadThumbnail} thumbnail={props.thumbnail}>
              <MyButton>썸네일 업로드</MyButton>
            </S.Thumbnail>
            <input
              ref={props.imgRef}
              type="file"
              style={{ display: 'none' }}
              onChange={props.handleChangeFile}
              accept="image/*"
            />
        </Form.Item>
        </Form.Item>
        <S.Name>소개</S.Name>
        <Form.Item name="intro" rules={[{ required: true, message: '시리즈 소개를 작성해주세요.' }]}>
          <props.TextArea
            style={{ width: "100%", minHeight: "6rem" }}
            placeholder='좋은 소개글은 사람들의 이목을 끌어모아요!'
          />
        </Form.Item>
        <S.Name>카테고리</S.Name>
        <Form.Item name="category" rules={[{ required: true, message: '카테고리를 정해주세요.' }]}>
          <Select
              placeholder="카테고리"
              style={{ width: '100%' }}
              options={props.categoryOptions}
            />
        </Form.Item>
        <S.Name>포스트 추가하기</S.Name>
        <Form.Item name="posts" rules={[{ required: true, message: '포스트를 추가해주세요.' }]}>
          <Select
            placeholder="포스트 추가하기"
            mode="multiple"
            showArrow
            tagRender={props.tagRender}
            onChange={props.onCheckPost}
            style={{
              width: '100%',
            }}
            options={props.postOptions}
          />
        </Form.Item>
        <S.PriceToggle>
          <S.Name>포스트 가격</S.Name>
          <S.PriceSwitch
            checked={props.isClickPrice}
            onChange={() => {
              props.setIsClickPrice(!props.isClickPrice);
            }}
          />
          {props.isClickPrice ? <div>유료로 출간하기 (3,000원)</div> : <div>무료로 출간하기</div>}
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