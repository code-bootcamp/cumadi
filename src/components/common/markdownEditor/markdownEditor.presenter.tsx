import { Editor } from '@toast-ui/react-editor'
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight'
import Prism from 'prismjs' // prism 테마 추가
import '@toast-ui/editor/dist/toastui-editor.css'
import 'tui-color-picker/dist/tui-color-picker.css'
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css'
import 'prismjs/themes/prism.css'
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import { MarkdownEditorProps } from './markdownEditor.types'

export default function MarkdownEditorUI({ editorRef, content = '', toolbarItems }: MarkdownEditorProps) {
  return (
    <Editor
      ref={editorRef}
      initialValue={content || ' '}
      height="600px"
      initialEditType="markdown"
      hideModeSwitch={true}
      useCommandShortcut={true}
      toolbarItems={toolbarItems}
      usageStatistics={false}
      plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
    />
  )
}