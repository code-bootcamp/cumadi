import * as S from './postStats.styles'

export default function PostStatsUI() {
  return (
    <S.Container>
      <S.TopBox>
        <S.VisitorNumber>전체 방문자 수</S.VisitorNumber>
        <S.VisitorNumber>일일 방문자 수</S.VisitorNumber>
      </S.TopBox>
      <div>메인 통계 보여줄 곳</div>
    </S.Container>
  )
}
