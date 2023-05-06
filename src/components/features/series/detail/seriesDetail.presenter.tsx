import { seriesItem } from '@/common/dummyData/series'
import * as S from './seriesDetail.styles'
import { MyTag } from '@/components/common/customComponent.styles'
import SeriesAnswerList from '../../series-answer/list/seriesAnswerList.container'
import SeriesAnswerWrite from '../../series-answer/write/seriesAnswerWrite.container'

export default function SeriesDetailUI() {
  return (
    <S.Container>
      <div>
        <S.PostTitle>{seriesItem[0].title}</S.PostTitle>
        <S.PostSubTitle>{seriesItem[0].introduction}</S.PostSubTitle>
        <S.PostTagWapper>
          <S.Category>{seriesItem[0].categories}</S.Category>
          <S.TopTag>주간 2위</S.TopTag>
        </S.PostTagWapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.Info>
              <S.Writer>{seriesItem[0].name}</S.Writer>
              <S.CreatedAt>{seriesItem[0].createDate}</S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
          <S.PostUpdateBtnWrapper>
            <button>수정</button>
            <button>삭제</button>
          </S.PostUpdateBtnWrapper>
        </S.Header>
        <S.PriceWrapper>
          <S.Sell>판매가 : <S.Price>{seriesItem[0].price}</S.Price></S.Sell>
          <S.PackTag>장바구니에 담기</S.PackTag>
          <MyTag isChecked={true}>바로 구매하기</MyTag>
        </S.PriceWrapper>
        
        <div style={{ marginBottom: "30px"}}>2개의 포스트 <S.Update>마지막 업데이트 {seriesItem[0].createDate}</S.Update></div>
        <S.PostWrapper>
          <S.ImageWrapper>
            <S.Image src={seriesItem[0].posts?.first.image} />
          </S.ImageWrapper>
          <S.DescriptionWrapper>
            <S.PostCategory>{seriesItem[0].posts?.first.categories}</S.PostCategory>
            <S.PostName>{seriesItem[0].posts?.first.title}</S.PostName>
            <S.PostName2>{seriesItem[0].posts?.first.intro}</S.PostName2>
            <S.PostIntro>{seriesItem[0].posts?.first.contents}</S.PostIntro>
            <S.PostIntro>{seriesItem[0].posts?.first.createDate}</S.PostIntro>
          </S.DescriptionWrapper>
        </S.PostWrapper>
        <S.PostWrapper>
          <S.ImageWrapper>
            <S.Image src={seriesItem[0].posts?.first.image} />
          </S.ImageWrapper>
          <S.DescriptionWrapper>
            <S.PostCategory>{seriesItem[0].posts?.second.categories}</S.PostCategory>
            <S.PostName>{seriesItem[0].posts?.second.title}</S.PostName>
            <S.PostName2>{seriesItem[0].posts?.second.intro}</S.PostName2>
            <S.PostIntro>{seriesItem[0].posts?.second.contents}</S.PostIntro>
            <S.Date>{seriesItem[0].posts?.second.createDate}</S.Date>
            
          </S.DescriptionWrapper>
        </S.PostWrapper>
      </div>
      {/* 포스트 댓글 */}
      <SeriesAnswerList />
      <SeriesAnswerWrite />
    </S.Container>
  )
}
