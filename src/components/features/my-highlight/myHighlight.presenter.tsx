import { MyButton, MyTag } from '@/components/common/customComponent.styles'
import * as S from './myHighlight.styles'
import PaginationHighlight from '@/components/common/pagination/PaginationMyHighlight/PaginationMyHighlight.container'

export default function MyHighlightUI(props: any) {
  return (
    <S.Container>
      <S.NoteTitle>내 노트목록</S.NoteTitle>
      <S.Body>
        {props.savedTextsHighlight.map((el: any) => (
          <S.Card>
            <S.CardTop>
              <S.CardTopHeader>
                <S.CardTitle>포스트 제목</S.CardTitle>
              </S.CardTopHeader>
              <S.CardContents>{el}</S.CardContents>
            </S.CardTop>
            <S.CardBottom>
              <MyTag isChecked={false}>카테고리</MyTag>
              <MyButton type="primary">삭제</MyButton>
            </S.CardBottom>
          </S.Card>
        ))}
      </S.Body>
      <PaginationHighlight />
    </S.Container>
  )
}
