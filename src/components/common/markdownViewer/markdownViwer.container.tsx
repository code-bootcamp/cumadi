'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import vscDarkPlus from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus'

import * as S from './markdownViwer.stypes'
import { IMarkdownViewProps } from './markdownViwer.type'

export default function MarkdownView({ content }: IMarkdownViewProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter {...props} style={vscDarkPlus} language={match[1]} PreTag="div">
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        },
        // img 태그가 오면
        img: image => <S.PostDetailImg src={image.src || ''} alt={image.alt || ''} />,
      }}>
      {content}
    </ReactMarkdown>
  )
}

/*** react-syntax-highlighter 라이브러리
 * esm과 cjs 두 가지 버전으로 스타일을 제공
 * Next.js는 빌드 때 Babel이 src 디렉토리에 es6 이상을 사용하는 코드를 es5 버전으로 변환
 * 그래서 node_module에 있는 vsc-dark 모듈은 변환되지 않습니다.
 * Next.js는 SSR을 할 때 Node.js로 코드를 실행하는데,
 * Node.js가 사용하는 CommonJS 모듈 시스템으로 변환되지 않은 vsc-dark 모듈의 export 키워드를 실행하면서 에러가 발생한 것
 * Node.js가 사용하는 Common JS 모듈 시스템을 사용하는 cjs 버전 모듈을 사용하면 해결
 */
