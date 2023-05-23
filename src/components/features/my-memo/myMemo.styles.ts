import { breakPoints } from '@/common/styles/media'
import styled from '@emotion/styled'

export const Container = styled.section`
  width: 84rem;
  height: auto;

  @media ${breakPoints.tablet} {
    width: 65rem;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`

export const NoteTitle = styled.h1`
  margin: 2rem 0;
  font-size: 2rem;
  text-align: center;
`

// **** 내 메모 내용
export const Body = styled.div`
  width: 84rem;
  margin: 3rem 0;

  @media ${breakPoints.tablet} {
    width: 65rem;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`

// **** 카드
export const List = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

// ** 리스트 상단
export const ListTop = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 3.5rem;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid var(--color-gray-3);
`

// ** 리스트 하단
export const ListBottom = styled.div`
  padding: 1rem;
`

export const ListContents = styled.div`
  height: auto;
`
