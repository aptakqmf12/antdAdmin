import React, { useState } from 'react';
import { Input, Row, Col, Button, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const InputBox = styled.div`
  margin-bottom: 10px;
  div.info {
    text-align: right;
    color: red;
    &.correct {
      color: blue;
    }
  }
`;
const Login = () => {
  const [user, setUser] = useState({ id: '', pw: '' });

  // 인풋작성
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // id, pw를 user상태값에 저장
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    // 입력중인지 아닌지 판단
    const infoDiv = e.target.parentNode?.nextSibling as HTMLElement;
    e.target.value !== ''
      ? infoDiv.classList.add('correct')
      : infoDiv.classList.remove('correct');
  };
  // 로그인
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('userId', user.id);
    localStorage.setItem('userPw', user.pw);
  };
  return (
    <>
      <h2>로그인</h2>
      <form onSubmit={onSubmit}>
        <InputBox>
          <Input
            size='large'
            type='email'
            maxLength={30}
            placeholder='id'
            onChange={handleInput}
            name='id'
            prefix={<UserOutlined />}
            required
          />
          <div className='info'>아이디를 입력하세요</div>
        </InputBox>
        <InputBox>
          <Input
            size='large'
            type='password'
            maxLength={15}
            placeholder='p/w'
            onChange={handleInput}
            name='pw'
            prefix={<UserOutlined />}
            required
          />
          <div className='info'>비밀번호를 입력하세요</div>
        </InputBox>

        <div style={{ marginTop: 50, textAlign: 'center' }}>
          <Space>
            <Button type='primary' htmlType='submit'>
              로그인
            </Button>
            <Button>
              <Link to='/signup'>회원가입</Link>
            </Button>
          </Space>
        </div>
      </form>
    </>
  );
};

export default Login;
