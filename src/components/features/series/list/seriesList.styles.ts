import styled from '@emotion/styled'
import { Card, Switch, Tag } from 'antd'

import { Colors } from '@/common/styles/colors'
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

export const StyledCard = styled(Card)<{ isfree: boolean; itemPrice: number }>`
  display: ${props => (props.isfree && props.itemPrice !== 0 ? 'none' : '')};
  width: 25rem;
  border: unset;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

export const Price = styled.div`
  font-size: 0.9rem;
  color: ${Colors.gray1};
`

export const CardThumbnailImg = styled.img`
  width: 100%;
  height: 13rem;
  object-fit: cover;
`

export const Main = styled.main`
  min-height: 20rem;
`

export const TitleWrapper = styled.section`
  margin: 1rem 0;
  text-align: center;
  width: 100%;
`

export const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
`

export const TagWrapper = styled.div`
  font-weight: bold;
  margin: 1rem 0;
`

export const TopTag = styled(Tag)<{ isClicked: boolean }>`
  padding: 0.02rem 0.5rem;
  border-radius: 1.5rem;
  border: none;
  background-color: ${props => (props.isClicked ? Colors.muted : Colors.white)};
  cursor: pointer;
  color: ${props => (props.isClicked ? Colors.primary : Colors.gray1)};
`

export const ToggleWrapper = styled.div``

export const FreeToggle = styled.span`
  font-size: 0.7rem;
  padding-right: 0.7rem;
`

export const FreeSwitch = styled(Switch)``

export const EmptySpace = styled.div`
  opacity: 0;
`

export const categoryWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  font-weight: bold;
  margin: 1rem 0;
`

export const TagBar = styled.div``
