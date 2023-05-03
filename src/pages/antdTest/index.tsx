import { Button, Card, Input, Tag } from 'antd'
import styled from '@emotion/styled'

const MyButtonLg = styled(Button)<{ type: string; size: string }>`
  :where(.css-dev-only-do-not-override-wxfmsk).ant-btn.ant-btn-lg {
    border-radius: 10rem;
  }
`

export default function AntdTestPage() {
  return (
    <>
      <MyButtonLg type="primary" size="large">
        HII
      </MyButtonLg>
      <br />
      <Button type="primary" size={'large'}>
        Primary
      </Button>
      <Button size={'large'}>Default</Button>
      <Button type="primary" size={'large'} disabled>
        Primary
      </Button>
      <Button type="primary">default</Button>
      <Button>Default</Button>
      <Button type="default" disabled>
        default
      </Button>
      <Tag>Tag checked</Tag>
      <Tag>Tag unchecked</Tag>
      <Card
        style={{ width: 300 }}
        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}>
        <div>
          hello
          <h1 style={{ color: 'red' }}>hello</h1>
        </div>
      </Card>
      <Input type={'text'} />
    </>
  )
}
