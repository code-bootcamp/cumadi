import styled from '@emotion/styled'
import Image from 'next/image'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism' // Prism안에 테마

export default function MarkdownView({ content }: any) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        // **** code 태그가 오면

        // ****
        // code({ node, inline, className, children, ...props }) {
        //   // ** 작성한 언어 뽑아오기
        //   const match = /language-(\w+)/.exec(className || '')

        //   return !inline && match ? (
        //     // style속성이 {...props} 다음에 나오도록 해야 에러발생안됨
        //     <SyntaxHighlighter language={match[1]} PreTag="div" {...props} style={vscDarkPlus}>
        //       {String(children).replace(/\n$/, '')}
        //     </SyntaxHighlighter>
        //   ) : (
        //     <code className={className} {...props}>
        //       {children}
        //     </code>
        //   )
        // },
        // img 태그가 오면
        img: image => <ImgInMarkDown src={image.src || ''} alt={image.alt || ''} width={500} height={350} />,
      }}>
      {content}
    </ReactMarkdown>
  )
}

const ImgInMarkDown = styled(Image)`
  object-fit: cover;
  max-height: 60rem;
  width: 100%;
`
