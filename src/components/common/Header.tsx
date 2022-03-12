import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import './index.scss';

const Header = () => {
  const { Header } = Layout;
  return (
    <Header dir='rtl'>
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
        <Menu.Item key={1}>
          <Link to=''>HOME</Link>
        </Menu.Item>
        <Menu.Item key={2}>
          <Link to='chart'>CHART</Link>
        </Menu.Item>
        <Menu.Item key={3}>
          <Link to='board'>BOARD</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Header;
