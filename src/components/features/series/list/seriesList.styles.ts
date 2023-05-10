import { Colors } from '@/common/styles/colors'
import { breakPoints } from '@/common/styles/media'
import styled from '@emotion/styled'
import { Card } from 'antd'

export const Footer = styled.footer`
  width: 100%;
  min-height: 20rem;
  background-color: var(--color-gray-3);
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 2rem;
`

export const FooterTitle = styled.div`
  margin: 3rem 0;
  color: var(--color-black);
  font-size: 2rem;
  font-weight: bold;
`

export const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  width: 84rem;
  margin: 3rem 0;

  @media ${breakPoints.tablet} {
    width: 65rem;
  }

  @media ${breakPoints.mobile} {
    width: 50rem;
  }
`

export const StyledCard = styled(Card)`
  width: 27rem;
  border: 1px solid var(--color-gray-3);
  cursor: pointer;
`

export const Price = styled.div`
  font-size: 0.9rem;
  color: ${Colors.gray1};
`