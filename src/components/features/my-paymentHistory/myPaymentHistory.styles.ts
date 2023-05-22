import { breakPoints } from '@/common/styles/media'
import styled from '@emotion/styled'

export const Body = styled.section`
  display: inline-flex;
  flex-direction: column;
  width: 83rem;
  padding: 1rem;
  background-color: yellowgreen;

  @media ${breakPoints.tablet} {
    width: 60rem;
  }

  @media ${breakPoints.mobile} {
    width: 35rem;

    .card-wrapper .horizontal-card-cover {
      width: 10rem;
    }
    .card-wrapper .horizontal-card-body {
      padding: 0.5rem;
    }
  }
`

// 나중에 적용!!!
export const CheckListWrapper = styled.div`
  /* height: 52rem; */
`

export const CardWrapper = styled.div`
  display: inline-flex;
  gap: 1rem;
  width: 100%;
  margin: 0.5rem 0;
  align-items: center;
`

export const SeriesCard = styled.div`
  width: 100%;
  cursor: pointer;
`
