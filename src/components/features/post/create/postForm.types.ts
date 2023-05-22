import { ComponentType, MutableRefObject, RefObject } from 'react'
import { MarkdownEditorProps } from '@/components/common/markdownEditor/markdownEditor.types'
import { InputRef } from 'antd'
export interface IPostFormProps {
  isEditMode: boolean
}

export interface IPost {
  id: string
  name: string
  title: string
  contents: string
  tags: string[]
  series: any
  image: string
  price: number
  createDate: string
}

export interface PostFormUIProps {
  isEditMode: boolean
  post: any
  tags: any[]
  inputRef: RefObject<InputRef>
  handleSearchChange: (value: string) => void
  filterOption: (input: string, option: any) => any
  isAddTagOptionVisible: boolean
  handleClickAddTag: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  searchString: string
  handleSubmitForm: (values: any) => void
  DynamicImportEditor: ComponentType<MarkdownEditorProps>
  editorRef: MutableRefObject<any>
  form: any
}
