import { postItem } from '@/common/dummyData/post'
import * as S from './myHighlight.styles'

export default function MyHighlightUI() {
  return (
    <S.Container>
      <S.NoteTitle>내 노트목록</S.NoteTitle>
      <S.Body>
        {postItem.map(el => (
          <S.Card>
            <S.CardTop>
              <S.CardTopHeader>
                <S.CardTitle>{el.title}</S.CardTitle>
              </S.CardTopHeader>
              <S.CardContents>{el.contents}</S.CardContents>
            </S.CardTop>
            <S.CardBottom>
              <S.CardCategory>카테고리</S.CardCategory>
              <S.CardDelete>삭제</S.CardDelete>
            </S.CardBottom>
          </S.Card>
        ))}
      </S.Body>
    </S.Container>
  )
}
