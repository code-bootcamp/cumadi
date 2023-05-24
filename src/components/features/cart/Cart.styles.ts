import { breakPoints } from '@/common/styles/media'
import styled from '@emotion/styled'

export const Body = styled.section`
  display: inline-flex;
  flex-direction: column;
  gap: 1rem;
  width: 83rem;
  padding: 1rem;

  .ant-checkbox-inner {
    width: 1.5rem;
    height: 1.5rem;

    &::after {
      width: 0.5rem;
      height: 0.8rem;
    }
  }

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

export const EmptyCart = styled.div`
  height: 52rem;
  margin: auto;
  color: var(--color-gray-2);
  font-size: 1.5rem;
  line-height: 52rem;
`

export const AllCheckWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const AllCheckTitle = styled.span`
  margin-left: 1rem;
  font-weight: 500;
`

export const CheckListWrapper = styled.div``

export const CardWrapper = styled.div`
  display: inline-flex;
  gap: 1rem;
  width: 100%;
  margin: 0.5rem 0;
  align-items: center;
`

export const TitleWrapper = styled.div`
  display: flex;
`

export const BookImage = styled.img`
  width: 1rem;
  margin-right: 0.5rem;
`

export const TotalPriceWrapper = styled.div`
  display: inline-flex;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-primary);
  align-items: center;
  justify-content: end;
`

export const TotalPrice = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`
