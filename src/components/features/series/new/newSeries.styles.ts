import { breakPoints } from '@/common/styles/media'
import styled from '@emotion/styled'
import { Form, Switch } from 'antd'

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
  margin-top: 3rem;
`

export const Name = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 3rem;
`

export const Thumbnail = styled.div<{ backgroundUrl?: string }>`
  width: 100%;
  height: 12.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #7E7872;
  border-radius: 0.25rem;
  cursor: pointer;
  background: #D9D9D9;
  background-image: url(${props => props.backgroundUrl});
  background-size: 100%;
  background-position: center;
`

export const PriceToggle = styled.div`
  display: flex;
  align-items: center;
`

export const PriceSwitch = styled(Switch)`
  margin: 0 10px 0 10px;
`