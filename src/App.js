import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Navigation from './MenuBar/Navigation';
import Component from './MainWindow/Component/Component'
import Element from './MainWindow/Element/Element'
import Part from './MainWindow/Part/Part'
import Product from './MainWindow/Product/Product'
import Role from './MainWindow/Role/Role'
import { Layout } from 'antd';

const { Header, Content, Footer, Sider } = Layout;



function App() {

  const [collapsed, setCollapsed] = useState(false);
  const [content, setContent] = useState();

  useEffect(() => {

  });

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuItemChange = (keyValue) => {
    console.log(keyValue)

    if (keyValue === 1) {
      setContent(<Product />)
    }
    else if (keyValue === 2) {
      setContent(<Part />)
    }
    else if (keyValue === 3) {
      setContent(<Element />)
    }
    else if (keyValue === 4) {
      setContent(<Component />)
    }
    else if (keyValue === 5) {
      setContent(< Role />)
    }
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
            {content}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Created by Filip Gatarić @ 2020</Footer>
        </Layout>
      </Layout>
    </div>
  )
}


export default App;
