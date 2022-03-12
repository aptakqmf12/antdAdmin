import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';

const Home = () => {
  const { Content } = Layout;
  return (
    <>
      {/* 콘텐츠영역 */}
      <Layout className='site-layout-background'>
        <Content style={{ padding: '0 24px', minHeight: 240 }}>
          메인페이지
        </Content>
      </Layout>
    </>
  );
};

export default Home;
