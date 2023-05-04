import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import styled from '@emotion/styled'

interface IMyButtonProps {
  isMain: boolean
}

const BasicBtn = styled.button`
  padding: 0.5rem;
  margin-left: 0.5rem;
  border: 1px solid var(--color-gray-2);
  border-radius: 1rem;
  color: ${(props: IMyButtonProps) => (props.isMain ? `#ffffff` : '#17100a')};
  background-color: ${(props: IMyButtonProps) => (props.isMain ? `#f56040` : '#ffffff')};
  cursor: pointer;
`

export default function BasicButton(props: any) {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <BasicBtn type={props.type} onClick={onClickMoveToPage(`${props.movePage}`)} isMain={props.isMain}>
      {props.name}
    </BasicBtn>
  )
}
