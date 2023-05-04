import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { visitedPageState } from '../store'

export function useMoveToPage() {
  const router = useRouter()
  // **** 페이지 이동 시, 마지막 방문한 페이지 정보를 globalState 저장하기 위해
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState)

  const onClickMoveToPage = (path: string) => () => {
    setVisitedPage(path)
    void router.push(path)
  }

  return { visitedPage, onClickMoveToPage }
}
