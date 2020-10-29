import React from 'react'
import { Layout, Menu } from 'antd'

const HeaderBar = () => {
  const { Header } = Layout
  return (
    <Layout>
      <Header
        style={{
          width: '100%',
          position: 'fixed',
          zIndex: 1,
          top: 0
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ paddingLeft: 150 }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  )
}

export default HeaderBar
