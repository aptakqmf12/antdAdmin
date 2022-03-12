import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Icon, { CloseOutlined, HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Layout className='site-layout-background flex-center'>
      <div style={{ height: '100%', fontSize: '30px', fontWeight: 'bold' }}>
        Not Found 404 Error! &nbsp;
        <HomeOutlined
          onClick={() => {
            navigate('/');
          }}
        />
      </div>
    </Layout>
  );
};

export default NotFound;
