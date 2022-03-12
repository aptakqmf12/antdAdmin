import React from 'react';
import { Header, Footer } from './components/common/';
import NotFound from './components/NotFound';
import { Home, Chart } from './pages/index';
import { Link, Routes, Route, useParams } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

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
          <Sider className='site-layout-background' width={200}>
            <Menu
              mode='inline'
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <SubMenu key='sub1' title='subnav 1'>
                <Menu.Item key='1'>option1</Menu.Item>
                <Menu.Item key='2'>option2</Menu.Item>
                <Menu.Item key='3'>option3</Menu.Item>
                <Menu.Item key='4'>option4</Menu.Item>
              </SubMenu>
              <SubMenu key='sub2' title='subnav 2'>
                <Menu.Item key='5'>option5</Menu.Item>
                <Menu.Item key='6'>option6</Menu.Item>
                <Menu.Item key='7'>option7</Menu.Item>
                <Menu.Item key='8'>option8</Menu.Item>
              </SubMenu>
              <SubMenu key='sub3' title='subnav 3'>
                <Menu.Item key='9'>option9</Menu.Item>
                <Menu.Item key='10'>option10</Menu.Item>
                <Menu.Item key='11'>option11</Menu.Item>
                <Menu.Item key='12'>option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>

          <Content style={{ padding: '24px', minHeight: 280 }}>
            <Routes>
              <Route index element={<Home />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/chart' element={<Chart />} />
            </Routes>
          </Content>
        </Layout>
      </Content>

      <Footer />
    </Layout>
  );
}

export default App;
