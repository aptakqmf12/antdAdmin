import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './index.scss';

const Footer = () => {
  const { Footer } = Layout;
  return (
    <Footer style={{ textAlign: 'center' }}>KTW &copy; Right Reserved</Footer>
  );
};

export default Footer;
