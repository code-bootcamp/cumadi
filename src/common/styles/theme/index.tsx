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
      }}
    >
      <ConfigProvider
        theme={{
          token: {
            borderRadiusSM: 4,
            borderRadius: 4,
            borderRadiusLG: 20,
            colorTextBase: Colors.black,
            colorError: Colors.errorRed,
            colorBgMask: Colors.gray3,
            colorBgSpotlight: Colors.gray1,
            colorBorder: Colors.gray4,
            colorTextPlaceholder: Colors.gray2,
          },
        }}
      >
        {node}
      </ConfigProvider>
    </ConfigProvider>
  </>
)

export default antdTheme
