import React from 'react'
import { Layout, Menu } from 'antd'

const SiderBar = () => {
  const { SubMenu } = Menu
  const { Sider } = Layout
  return (
    <Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          top: 64,
          left: 0
        }}
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['2']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" title="subnav 1">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  )
}

export default SiderBar
