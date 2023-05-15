import * as S from './myMemo.styles'
import PaginationHighlight from '@/components/common/pagination/PaginationMyHighlight/PaginationMyHighlight.container'
import { MyButton, MyTag } from '@/components/common/customComponent.styles'

// interface IMyMemoUIProps {
//   data: any
//   onClickDeleteMemo: () => void
// }

export default function MyMemoUI(props: any) {
  console.log(props.data?.fetchPostMemos)

  return (
    <S.Container>
      <S.NoteTitle>내 노트목록</S.NoteTitle>
      <S.Body>
        {props.data?.fetchPostMemos.map((element: any) => (
          <S.List key={element.memoId}>
            <S.ListTop>
              <MyTag isChecked={false}>카테고리</MyTag>
              <MyButton type="primary" id={element.memoId} onClick={props.onClickDeleteMemo}>
                삭제
              </MyButton>
            </S.ListTop>
            <S.ListBottom>
              <S.ListContents>{element.parse}</S.ListContents>
            </S.ListBottom>
          </S.List>
        ))}
      </S.Body>
      <PaginationHighlight />
    </S.Container>
  )
}
