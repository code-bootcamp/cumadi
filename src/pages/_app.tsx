import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { globalStyles } from '@/common/styles/globalStyles'
import { RecoilRoot } from 'recoil'
import Layout from '@/common/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}
