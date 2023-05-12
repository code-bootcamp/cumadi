import { ComponentType, MutableRefObject } from 'react'
import { MarkdownEditorProps } from '@/components/common/markdownEditor/markdownEditor.types'

export interface PostFormUIProps {
  isEditMode: boolean
  post: any
  tags: string[]
  handleSearchChange: (value: string) => void
  isAddTagOptionVisible: boolean
  handleClickAddTag: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  searchString: string
  handleSubmitForm: (values: any) => void
  DynamicImportEditor: ComponentType<MarkdownEditorProps>
  editorRef: MutableRefObject<any>
  form: any
}
