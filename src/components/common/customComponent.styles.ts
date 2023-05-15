import styled from '@emotion/styled'
import { Button, Card, Tag } from 'antd'
import { Colors } from '@/common/styles/colors'

// Ant design Overrides
export const MyButton = styled(Button)`
  padding: 1rem;
  display: flex;
  border-radius: 1rem;
`

export const MyTag = styled(Tag)<{ isChecked: boolean }>`
  padding: 0.25rem 1rem;
  color: ${props => (props.isChecked ? Colors.white : Colors.black)};
  border-radius: 1.5rem;
  border: 1px solid var(--color-gray-3);
  border: unset;
  background-color: ${props => (props.isChecked ? Colors.primary : 'unset')};
  cursor: pointer;
`

export const MyTagSecondary = styled(MyTag)<{ isChecked: boolean }>`
  color: ${props => (props.isChecked ? Colors.primary : Colors.black)};
  background-color: ${props => (props.isChecked ? Colors.muted : 'unset')};
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

export const ElevatedCard = styled.div`
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0px 0px 8px 2px rgba(217, 217, 217, 0.6);
  border-radius: 1rem;
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

export const StyledCardOutlined = styled(Card)`
  width: 27rem;
  border: 1px solid var(--color-gray-3);
  cursor: pointer;
`

export const StyledCardCover = styled.img`
  height: 12.5rem;
  object-fit: cover;
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
