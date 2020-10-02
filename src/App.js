import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Navigation from './MenuBar/Navigation';

import { Layout } from 'antd';


const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {

  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <div className="App">
        <Layout style={{ minHeight: '100vh' }}>
          <Sider style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
            collapsible collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}>
            <div className="logo" />
            <Navigation />
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <p>Bok!</p>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Created by Filip Gatarić @ 2020</Footer>
          </Layout>
        </Layout>
      </div>
    )
  };
}

export default App;
