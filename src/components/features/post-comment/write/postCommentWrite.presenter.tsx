import * as S from './postCommentWrite.styles'
import { IPostCommentWriteUIProps } from './postCommentWrite.types'

export default function PostCommentWriteUI(props: IPostCommentWriteUIProps) {
  return (
    <S.Container>
      <S.CommentContent
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시
      모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        maxLength={100}
        onChange={props.onChangeContent}
        // 만약에 props.contents가 비어있다면, 뒤에꺼 보여주기
        value={props.content || (props.comment?.content ?? '')}
      />
      <S.ButtonWrapper>
        <S.ContentsLength>
          {(props.content ? props.content.length : props.comment?.content.length) ?? 0}/100
        </S.ContentsLength>
        <S.ColorButton onClick={props.isPostCommentEdit ? props.onClickUpdateComment : props.onClickCreateComment}>
          {props.isPostCommentEdit ? '수정' : '등록'}
        </S.ColorButton>
      </S.ButtonWrapper>
    </S.Container>
  )
}
