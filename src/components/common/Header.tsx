import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import './index.scss';
import styled from 'styled-components';

const StyledNav = styled.div`
  ul {
    display: flex;
    color: white;
    list-style: none;
    li {
      &:hover {
        background-color: #1890ff;
        transition: all 0.3s ease;
      }
      a {
        display: block;
        padding: 0 20px;
        color: white;
      }
    }
  }
`;

const Header = () => {
  const { Header } = Layout;
  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
        <Menu.Item key={1}>
          <Link to=''>HOME</Link>
        </Menu.Item>
        <Menu.Item key={2}>
          <Link to='chart'>CHART</Link>
        </Menu.Item>
        <Menu.Item key={3}>
          <Link to='board'>BOARD</Link>
        </Menu.Item>
      </Menu> */}
      <h1 style={{ color: 'white' }}>
        <Link to='./'>LOGO</Link>
      </h1>
      <StyledNav>
        <ul>
          <li>
            <Link to={'/login'}>Login</Link>
          </li>
          <li>
            <Link to={'/Signup'}>Signup</Link>
          </li>
        </ul>
      </StyledNav>
    </Header>
  );
};

export default Header;
