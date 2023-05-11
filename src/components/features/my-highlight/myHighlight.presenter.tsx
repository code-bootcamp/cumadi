import { MyButton, MyTag } from '@/components/common/customComponent.styles'
import * as S from './myHighlight.styles'
import PaginationHighlight from '@/components/common/pagination/PaginationMyHighlight/PaginationMyHighlight.container'

export default function MyHighlightUI(props: any) {
  return (
    <S.Container>
      <S.NoteTitle>내 노트목록</S.NoteTitle>
      <S.Body>
        {props.savedTextsHighlight.map((element: any, index: number) => (
          <S.List>
            <S.ListTop>
              <MyTag isChecked={false}>카테고리</MyTag>
              <MyButton type="primary" id={`${index}`} onClick={props.onClickDeleteMemo}>
                삭제
              </MyButton>
            </S.ListTop>
            <S.ListBottom>
              <S.ListContents>{element}</S.ListContents>
            </S.ListBottom>
          </S.List>
        ))}
      </S.Body>
      <PaginationHighlight />
    </S.Container>
  )
}
