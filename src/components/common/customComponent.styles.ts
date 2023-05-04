import styled from '@emotion/styled'
import { Button, Tag } from 'antd'
import { Colors } from '@/common/styles/colors'

// Ant design Overrides
export const MyButton = styled(Button)`
  padding: 1rem;
  display: flex;
  border-radius: 1rem;
`

export const MyTag = styled(Tag)<{ isChecked: boolean }>`
  color: ${props => (props.isChecked ? Colors.white : Colors.black)};
  border-radius: 1.5rem;
  border: unset;
  background-color: ${props => (props.isChecked ? Colors.primary : 'unset')};
  cursor: pointer;
`

// Custom Card Component
export const HorizontalCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0;
  border-radius: 1rem;
  background-color: ${Colors.white};
  .horizontal-card-cover {
    width: 20rem;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem 0 0 1rem;
  }
  .horizontal-card-body {
    flex: 1;
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    line-height: 1.5rem;
  }
`

export const HorizontalCardLg = styled(HorizontalCard)`
  height: 14.5rem;
`

export const HorizontalCardSm = styled(HorizontalCard)`
  height: 6.5rem;
`

// Customization styles
export const FlexColumnContainer = styled.div<{ gap: string }>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.gap};
`

export const InfoSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  img {
    height: 1.5rem;
  }
`
export const ProfileContainer = styled.span`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

export const ProfileTextDataContainer = styled.span`
  display: flex;
  flex-direction: column;
`

export const ReactionsContainer = styled.span`
  display: flex;
  gap: 1rem;
  color: ${Colors.gray1};
`

export const ReactionContainer = styled.span`
  display: flex;
  gap: 0.25rem;
  align-items: center;
`

export const PriceContainer = styled.span`
  word-break: keep-all;
`
