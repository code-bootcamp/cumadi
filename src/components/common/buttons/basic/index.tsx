import styled from '@emotion/styled'

import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import { MyButton } from '../../customComponent.styles'

export default function BasicButton(props: any) {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <MyButton type={props.type} icon={props.icon} onClick={onClickMoveToPage(`${props.movePage}`)}>
      {props.name}
    </MyButton>
  )
}
