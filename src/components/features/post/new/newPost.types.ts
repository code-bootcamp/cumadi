import { ComponentType, MutableRefObject } from 'react'
import { MarkdownEditorProps } from '@/components/common/markdownEditor/markdownEditor.types'

export interface NewPostUIProps {
  handleSubmitForm: (values: any) => void
  DynamicImportEditor: ComponentType<MarkdownEditorProps>
  editorRef: MutableRefObject<any>
}
