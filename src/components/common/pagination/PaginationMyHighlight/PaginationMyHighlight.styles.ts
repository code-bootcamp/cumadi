import styled from '@emotion/styled'

export const PageNationWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface IPageProps {
  isActive?: boolean
}

export const Page = styled.span`
  margin: 0px 1rem;
  color: ${(props: IPageProps) => (props.isActive ? 'red' : 'default')};
  font-weight: ${(props: IPageProps) => (props.isActive ? 'bold' : 'normal')};
  cursor: ${(props: IPageProps) => (props.isActive ? 'none' : 'pointer')};
`
