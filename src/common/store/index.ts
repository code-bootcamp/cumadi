import { atom, selector } from 'recoil'
import { v1 } from 'uuid'
import { ITag } from '../types/generated/types'
// import { getAccessToken } from '../libraries/getAccessToken'
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

// **** 포스트 상세 메모
export const memoPostDetail = atom({
  key: `memoPostDetail/${v1()}`,
  default: [],
})

// **** 출판 전 포스트 정보
export const postFormState = atom({
  key: `postFormState/${v1()}`,
  default: {
    postId: '',
    title: '',
    content: '',
    image: '',
    description: '',
    seriesId: '',
    tags: [],
  },
})

export const tempPostIdState = atom({
  key: `tempPostIdState/${v1()}`,
  default: '',
})

// **** 태그 정보
export const tagsState = atom({
  key: `tagsState/${v1()}`,
  default: <any>[],
})

export const restoreAccessTokenLoadable = selector({
  key: `restoreAccessTokenLoadable/${v1()}`,
  get: async () => {
    // const newAccessToken = await getAccessToken()
    // return newAccessToken
  },
})

// **** 바로구매 시리즈 정보
export const buyItemId = atom({
  key: `buyItemId/${v1()}`,
  default: '',
})
