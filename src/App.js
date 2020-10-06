import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Navigation from './MenuBar/Navigation';
import { channels } from './constants'

import { Layout } from 'antd';


const { Header, Content, Footer, Sider } = Layout;

function App() {

  const [collapsed, setCollapsed] = useState(false);
  const componentDidMount = () => {

  }

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  const handleMenuItemChange = () => {

  };

  return (
    <div className="App">
      <Layout style={{ minHeight: '100vh' }}>
        <Sider style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
          collapsible collapsed={collapsed}
          onCollapse={onCollapse}>
          <div className="logo" />
          <Navigation menuItemChange={handleMenuItemChange} />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <p>BOK!</p>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Created by Filip Gatarić @ 2020</Footer>
        </Layout>
      </Layout>
    </div>
  )
}


export default App;
