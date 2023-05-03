import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { globalStyles } from '@/common/styles/globalStyles'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
