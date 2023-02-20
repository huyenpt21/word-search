import { Layout, Menu } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { MENUS } from './menu'

export default function MainLayout() {
  const navigate = useNavigate();
  return (
    <Layout theme="light">
      <Header theme="light" style={{background: '#FFFF'}}>
        <Menu theme='light' items={MENUS} mode="horizontal" onClick={(e) => navigate(e.key)}/>
      </Header>
      <Content style={{margin: '20px 65px'}}>
        <Outlet/>
      </Content>
    </Layout>
  )
}
