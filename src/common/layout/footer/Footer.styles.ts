import { breakPoints } from '@/common/styles/media'
import styled from '@emotion/styled'
import { Card } from 'antd'

export const Footer = styled.footer`
  width: 100%;
  min-height: 20rem;
  box-shadow: 0 0 5px 0 var(--color-gray-3) inset;
  margin-bottom: 1rem;
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
  width: 84rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media ${breakPoints.tablet} {
    width: 65rem;
  }

  @media ${breakPoints.mobile} {
    width: 50rem;
  }
`
