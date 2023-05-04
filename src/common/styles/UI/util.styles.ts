import styled from '@emotion/styled'

export const TruncatedText = styled.span<{ lines: number }>`
  display: -webkit-box;
  -webkit-line-clamp: ${props => props.lines};
  -webkit-box-orient: vertical;
  overflow: hidden;
`
