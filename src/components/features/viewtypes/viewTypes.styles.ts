import { Colors } from '@/common/styles/colors'
import styled from '@emotion/styled'
import { Tag } from 'antd'

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

export const TagWrapper = styled.div`
  font-weight: bold;
  margin: 1rem 0;
`

export const RedTag = styled(Tag)`
  padding: 0.5rem 1rem;
  color: ${Colors.white};
  border-radius: 1.5rem;
  border: 1px solid var(--color-gray-3);
  border: unset;
  background-color: ${Colors.primary};
  cursor: pointer;
`

export const WhiteTag = styled(Tag)`
  padding: 0.5rem 1rem;
  color: ${Colors.black};
  border-radius: 1.5rem;
  border: 1px solid var(--color-gray-3);
  border: unset;
  background-color: 'unset';
  cursor: pointer;
`
