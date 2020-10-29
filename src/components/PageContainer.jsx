import React from 'react'
import { Layout } from 'antd'

const PageContainer = () => {
  const { Content } = Layout
  return (
    <Layout>
      <Content
        style={{
          padding: '20px 50px',
          marginTop: 64,
          marginLeft: 200,
          minHeight: 840
        }}
      >
        123
      </Content>
    </Layout>
  )
}

export default PageContainer
