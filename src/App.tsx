import React from 'react';
import { Header, Footer, SideBar } from './components/common/';
import NotFound from './components/NotFound';
import { Home, Chart, Login, Signup } from './pages/index';
import { Link, Routes, Route } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import './components/common/index.scss';

function App() {
  const { Content, Sider } = Layout;
  const { SubMenu } = Menu;
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />

      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link to='/'>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Chart</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className='site-layout-background'>
          <SideBar />

          <Content style={{ padding: '24px', minHeight: 280 }}>
            <Routes>
              <Route index element={<Home />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/chart' element={<Chart />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
          </Content>
        </Layout>
      </Content>

      <Footer />
    </Layout>
  );
}

export default App;
