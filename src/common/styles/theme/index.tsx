import React from 'react'
import { ConfigProvider } from 'antd'
import { Colors } from '../colors'

const antdTheme = (node: JSX.Element) => (
  <>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: Colors.primary,
        },
      }}>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 4,
          },
        }}>
        {node}
      </ConfigProvider>
    </ConfigProvider>
  </>
)

export default antdTheme
