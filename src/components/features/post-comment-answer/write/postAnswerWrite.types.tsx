import { ChangeEvent, MouseEvent } from 'react'

export interface IPostAnserWriteUIProps {
  contents?: String
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void
  onClickCreateAnswer: (event: MouseEvent<HTMLButtonElement>) => void
  onClickUpdateAnswer: (event: MouseEvent<HTMLButtonElement>) => void
}
