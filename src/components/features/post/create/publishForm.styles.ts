import styled from '@emotion/styled'

import { Colors } from '@/common/styles/colors'

export const ThumbnailUploadHandler = styled.div<{ backgroundUrl?: string }>`
  width: 100%;
  height: 12.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${Colors.gray4};
  border-radius: 0.25rem;
  cursor: pointer;
  background-image: url(${props => props.backgroundUrl});
  background-size: 100%;
  background-position: center;
`
