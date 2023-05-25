import * as S from './myMemo.styles'
import PaginationMemo from '@/components/common/pagination/PaginationMyMemo/PaginationMyMemo.container'
import { MyButton } from '@/components/common/customComponent.styles'
import { IMyMemoUIProps } from './myMemo.types'

export default function MyMemoUI(props: IMyMemoUIProps) {
  return (
    <S.Container>
      <S.NoteTitle>내 노트</S.NoteTitle>
      <S.Body>
        {props.data?.fetchPostMemos.map((element: any) => (
          <S.List key={element.memoId}>
            <S.ListTop>
              <MyButton type="text" id={element.memoId} onClick={props.onClickDeleteMemo}>
                삭제
              </MyButton>
            </S.ListTop>
            <S.ListBottom>
              <S.ListContents>{element.parse}</S.ListContents>
            </S.ListBottom>
          </S.List>
        ))}
      </S.Body>
      {/* <PaginationMemo /> */}
    </S.Container>
  )
}
