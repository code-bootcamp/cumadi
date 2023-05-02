import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { globalStyles } from '@/common/styles/globalStyles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  )
}
