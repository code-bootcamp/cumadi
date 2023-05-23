import { Modal } from 'antd'
import { useMutation } from '@apollo/client'
import { Editor } from '@toast-ui/react-editor'
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight'
import '@toast-ui/editor/dist/i18n/ko-kr'
import Prism from 'prismjs'
import '@toast-ui/editor/dist/toastui-editor.css'
import 'tui-color-picker/dist/tui-color-picker.css'
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css'
import 'prismjs/themes/prism.css'
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import { UPLOAD_IMAGE } from './markdownEditor.queries'
import { MarkdownEditorProps } from './markdownEditor.types'
import { IMutation, IMutationUploadImageArgs } from '@/common/types/generated/types'

export default function MarkdownEditorUI({ editorRef, content, toolbarItems }: MarkdownEditorProps) {
  const [uploadImage] = useMutation<Pick<IMutation, 'uploadImage'>, IMutationUploadImageArgs>(UPLOAD_IMAGE)

  return (
    <Editor
      ref={editorRef}
      initialValue={content}
      height="30rem"
      initialEditType="markdown"
      hideModeSwitch={true}
      useCommandShortcut={true}
      toolbarItems={toolbarItems}
      usageStatistics={false}
      language="ko-KR"
      plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
      hooks={{
        addImageBlobHook: async (blob, callback) => {
          try {
            const file = new File([blob], 'name')
            const url = await uploadImage({ variables: { file } })
            callback(url.data?.uploadImage as string, '사진')
          } catch (error) {
            if (error instanceof Error) Modal.error({ content: error.message })
          }
        },
      }}
    />
  )
}
