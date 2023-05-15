import styled from '@emotion/styled'
import { Card } from 'antd'

import { breakPoints } from '@/common/styles/media'

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
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`
