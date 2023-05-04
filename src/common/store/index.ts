import { atom } from 'recoil'

// **** 방문 페이지
export const visitedPageState = atom({
  key: 'visitedPageState',
  default: '/', // default page
})
