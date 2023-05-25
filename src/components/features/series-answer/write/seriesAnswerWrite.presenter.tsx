import * as S from './seriesAnswerWrite.styles'
import { Avatar, Rate } from 'antd'

export default function SeriesAnswerWriteUI(props: any) {
  return (
    <>
      <S.AvatarWrapper>
        <Avatar>{props.user?.fetchUserLoggedIn?.nickname[0]}</Avatar>
        <S.Info>
          <S.Writer>{props.user?.fetchUserLoggedIn?.nickname}</S.Writer>
        </S.Info>
        <S.UserRate>
          <Rate onChange={props.onChangeRating} />
        </S.UserRate>
      </S.AvatarWrapper>

      <S.Container>
        <S.ReviewContent
          placeholder="시리즈를 구매하신 후 리뷰를 남길 수 있습니다."
          maxLength={100}
          onChange={props.onChangeContent}
          value={props.content || (props.comment?.content ?? '')}
        />
        <S.ButtonWrapper>
          <S.ContentsLength>
            {(props.content ? props.content.length : props.comment?.content.length) ?? 0}
            /100
          </S.ContentsLength>
          <S.ColorButton onClick={props.isEditReview ? props.onUpdateReview : props.onSubmitReview}>
            {props.isEditReview ? '수정하기' : '등록하기'}
          </S.ColorButton>
        </S.ButtonWrapper>
      </S.Container>
    </>
  )
}
