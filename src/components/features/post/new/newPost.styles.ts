import { breakPoints } from '@/common/styles/media'
import styled from '@emotion/styled'
import { Form } from 'antd'

export const Container = styled.section`
  width: 100%;
  height: 100%;
  padding: 0 12.5rem;

  @media ${breakPoints.tablet} {
    width: 44rem;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`

export const TitleWrapper = styled.section`
  margin: 1rem 0;
  text-align: center;
  width: 100%;
`

export const Title = styled.h2`
  margin-bottom: 2rem;
`

export const PostForm = styled(Form)`
  display: flex;
  flex-direction: column;
`

export const ButtonWrapper = styled.section`
  width: 100%;
  margin-top: 4rem;
`
