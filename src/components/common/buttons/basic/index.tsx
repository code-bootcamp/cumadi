import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import styled from '@emotion/styled'
import { MyButton } from '../../customComponent.styles'

export default function BasicButton(props: any) {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <MyButton type={props.type} onClick={onClickMoveToPage(`${props.movePage}`)}>
      {props.name}
    </MyButton>
  )
}
