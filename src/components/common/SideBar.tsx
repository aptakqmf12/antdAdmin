import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  return (
    <Sider className='site-layout-background' width={200}>
      <Menu
        mode='inline'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%' }}
      >
        <SubMenu key='sub1' title='데이터'>
          <Menu.Item key='1'>
            <Link to='./chart'>Chart</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SideBar;
