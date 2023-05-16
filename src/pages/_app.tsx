import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { globalStyles } from '@/common/styles/globalStyles'
import { RecoilRoot } from 'recoil'
import ApolloSetting from '@/components/common/apollo'
import Layout from '@/common/layout'

// Antd theme override
import '../../public/antd.min.css'
import antdTheme from '@/common/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return antdTheme(
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>,
  )
}
