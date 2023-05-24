import * as S from './seriesAnswerWrite.styles'
import { Avatar, Rate } from 'antd'

export default function SeriesAnswerWriteUI(props) {
  return (
    <>
      {props.isEditReview ? (
        <div></div>
      ) : (
        <S.AvatarWrapper>
          <S.Avatar src="/images/avatar.png" />
          <S.Info>
            <S.Writer>sehwan</S.Writer>
          </S.Info>
          <S.UserRate>
            <Rate onChange={props.onChangeRating} />
          </S.UserRate>
        </S.AvatarWrapper>
      )}

      <S.Container>
        <S.ReviewContent
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시
      모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          maxLength={100}
          onChange={props.onChangeContent}
          value={props.content || (props.comment?.content ?? '')}
        />
        <S.ButtonWrapper>
          <S.ContentsLength>
            {(props.content ? props.content.length : props.comment?.content.length) ?? 0}/100
          </S.ContentsLength>
          <S.ColorButton onClick={props.isEditReview ? props.onUpdateReview : props.onSubmitReview}>
            {props.isEditReview ? '수정하기' : '등록하기'}
          </S.ColorButton>
        </S.ButtonWrapper>
      </S.Container>
    </>
  )
}
