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
import { MarkdownEditorProps } from './markdownEditor.types'
import { gql, useMutation } from '@apollo/client'
import { IMutation, IMutationUploadImageArgs } from '@/common/types/generated/types'
import { Modal } from 'antd'

const UPLOAD_IMAGE = gql`
  mutation uploadImage($file: Upload!) {
    uploadImage(file: $file)
  }
`

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
      /* TODO: 서버 연결시 아래의 hook을 이용하여 image blob을 서버에 올리기. */
      hooks={{
        // addImageBlobHook: handleUploadImage,
        addImageBlobHook: async (blob, callback) => {
          try {
            console.log('image', blob)
            const file = new File([blob], 'name')
            const url = await uploadImage({ variables: { file } })
            console.log('url', url)
            callback(url as string, '사진')
          } catch (error) {
            if (error instanceof Error) Modal.error({ content: error.message })
          }
        },
      }}
    />
  )
}
