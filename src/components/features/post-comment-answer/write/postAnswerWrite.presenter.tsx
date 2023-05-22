import * as S from './postAnswerWrite.styles'
import { IPostAnserWriteUIProps } from './postAnswerWrite.types'

export default function PostAnswerWriteUI(props: IPostAnserWriteUIProps) {
  return (
    <S.Container>
      <S.CommentContent
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시
    모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        maxLength={100}
        onChange={props.onChangeContent}
        // 만약에 props.contents가 비어있다면, 뒤에꺼 보여주기
        defaultValue={props.content || (props.CommentAnswer?.content ?? '')}
      />
      <S.ButtonWrapper>
        <S.ContentsLength>
          {(props.content ? props.content.length : props.CommentAnswer?.content.length) ?? 0}/100
        </S.ContentsLength>
        <S.ColorButton onClick={props.isActivePostAnswer ? props.onClickCreateAnswer : props.onClickUpdateAnswer}>
          {props.isActivePostAnswer ? '등록' : '수정'}
        </S.ColorButton>
      </S.ButtonWrapper>
    </S.Container>
  )
}
