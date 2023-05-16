import * as S from './PaginationMyMemo.styles'

export default function PaginationMemoUI(props: any) {
  return (
    <S.PageNationWrapper>
      <S.Page onClick={props.onClickPrevPage}>&lt; 이전</S.Page>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <S.Page
              key={props.startPage + index}
              onClick={props.onClickPage}
              id={String(props.startPage + index)}
              isActive={props.startPage + index === props.activedPage}>
              {props.startPage + index}
            </S.Page>
          ),
      )}
      <S.Page onClick={props.onClickNextPage}>다음 &gt;</S.Page>
    </S.PageNationWrapper>
  )
}
