import MarkdownEditorUI from './markdownEditor.presenter'
import { MarkdownEditorProps } from './markdownEditor.types'

const toolbarItems = [
  ['heading', 'bold', 'italic', 'strike'],
  ['hr'],
  ['ul', 'ol', 'task'],
  ['table', 'link'],
  ['image'],
  ['code'],
  ['scrollSync'],
]

export default function MarkdownEditor({ editorRef, content = '' }: MarkdownEditorProps) {
  return <MarkdownEditorUI editorRef={editorRef} content={content} toolbarItems={toolbarItems} />
}