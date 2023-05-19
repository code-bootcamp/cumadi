import TextArea from 'antd/es/input/TextArea'

import BasicButton from '@/components/common/buttons/basic'
import * as S from './postCommentWrite.styles'

export default function PostCommentWriteUI(props: any) {
  return (
    <S.Container>
      <TextArea
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시
            모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        onChange={props.onChangeContents}
      />
      <S.ButtonWrapper>
        <BasicButton movePage={'/login'} name={'댓글 작성하기'} type="primary" onClick={props.onClickCreateComment} />
      </S.ButtonWrapper>
    </S.Container>
  )
}
