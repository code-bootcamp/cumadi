import { Form, Select } from 'antd'
import * as S from './postForm.styles'
import { MyButton } from '@/components/common/customComponent.styles'
import { ThumbnailUploadHandler } from './publishForm.styles'
import { PublishFormUIProps } from './publishForm.types'

export default function PublishFormUI(props: PublishFormUIProps) {
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>포스트 미리보기</S.Title>
      </S.TitleWrapper>

      <S.MyForm onFinish={props.handleSubmitForm} form={props.form}>
        <h4>썸네일</h4>
        <Form.Item name="thumbnail">
          <div>
            <ThumbnailUploadHandler onClick={props.handleClickUploadHandler} backgroundUrl={props.thumbnailUrl}>
              <MyButton>썸네일 업로드</MyButton>
            </ThumbnailUploadHandler>
            <input
              ref={props.fileRef}
              type="file"
              style={{ display: 'none' }}
              onChange={props.handleChangeFile}
              accept="image/*"
            />
          </div>
        </Form.Item>

        <h4>소개</h4>
        <Form.Item name="description">
          <props.TextArea
            autoSize={{ minRows: 3, maxRows: 6 }}
            placeholder="좋은 소개글은 사람들의 이목을 끌어모아요!"
          />
        </Form.Item>

        <h4>시리즈에 담기</h4>
        <Form.Item name="seriesId">
          <Select
            placeholder="시리즈 없음"
            options={props.series?.map((series: { title: any; seriesId: any }) => ({
              label: series.title,
              value: series.seriesId,
            }))}
          />
        </Form.Item>

        <Form.Item>
          <S.ButtonWrapper>
            {props.isEditMode ? (
              <MyButton htmlType="button" onClick={props.handleClickCancelEditPublish}>
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
