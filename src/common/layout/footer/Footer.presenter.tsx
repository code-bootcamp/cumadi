import * as S from './Footer.styles'
import { postItem } from '@/common/dummyData/post'

export default function LayoutFooterUI() {
  return (
    <S.Footer>
      <S.Container>
        <S.FooterTitler>이 포스트들은 어때요?</S.FooterTitler>
        <S.Body>
          {postItem.map(el => (
            <>
              <S.CardTitle>{el.title}</S.CardTitle>
              <S.CardTitle>{el.name}</S.CardTitle>
              <S.CardTitle>{el.price}</S.CardTitle>
            </>
          ))}
        </S.Body>
      </S.Container>
    </S.Footer>
  )
}
