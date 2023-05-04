import { atom, selector } from 'recoil'
import { v1 } from 'uuid'

// ** cf. https://velog.io/@sj_dev_js/Recoil-Duplicate-atom-key
// [에러 해결] Recoil : Duplicate atom key

// **** 방문 페이지
export const visitedPageState = atom({
  key: `visitedPageState/${v1()}`,
  default: '/', // default page
})

// **** 로그인 관련
export const accessTokenState = atom({
  key: `accessTokenState/${v1()}`,
  default: '',
})

// export const restoreAccessTokenLoadable = selector({
//   key: 'restoreAccessTokenLoadable',
//   get: async () => {
//     const newAccessToken = await getAccessToken()
//     return newAccessToken
//   },
// })
