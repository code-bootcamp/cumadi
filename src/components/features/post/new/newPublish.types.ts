import { TextAreaProps } from 'antd/es/input'
import { TextAreaRef } from 'antd/es/input/TextArea'
import { ChangeEvent, ForwardRefExoticComponent, RefAttributes, RefObject } from 'react'

export interface NewPublishUIProps {
  fileRef: RefObject<HTMLInputElement>
  thumbnailUrl?: string
  TextArea: ForwardRefExoticComponent<TextAreaProps & RefAttributes<TextAreaRef>>
  handleSubmitForm: (value: any) => void
  handleClickUploadHandler: () => void
  handleChangeFile: (event: ChangeEvent<HTMLInputElement>) => Promise<void>
  series: any
}
