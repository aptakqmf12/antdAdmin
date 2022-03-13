import React, { useState } from 'react';
import { Input, Row, Col, Button, Space, Checkbox } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const InputBox = styled.div`
  margin-bottom: 10px;
  div.info {
    text-align: right;
    font-size: 12px;
    color: red;
    &.correct {
      color: blue;
    }
  }
`;
const Signup = () => {
  const [user, setUser] = useState({ name: '', id: '', pw: '' });

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
      <h2>회원가입</h2>
      <form onSubmit={onSubmit}>
        <InputBox>
          <Input
            size='large'
            type='text'
            maxLength={5}
            placeholder='name'
            onChange={handleInput}
            name='name'
            value={user.name}
            prefix={<UserOutlined />}
            required
          />
        </InputBox>

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

        <textarea style={{ width: '100%', height: 150, padding: 10 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Why do we use it? It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like). Where does it
          come from? Contrary to popular belief, Lorem Ipsum is not simply
          random text. It has roots in a piece of classical Latin literature
          from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
          professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in classical literature,
          discovered the undoubtable source. Lorem Ipsum comes from sections
          1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
          of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
          on the theory of ethics, very popular during the Renaissance. The
          first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
          a line in section 1.10.32. The standard chunk of Lorem Ipsum used
          since the 1500s is reproduced below for those interested. Sections
          1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
          also reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham. Where can I get
          some? There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </textarea>

        <div style={{ textAlign: 'right' }}>
          <label>동의하기</label> <Checkbox />
        </div>

        <div style={{ marginTop: 50, textAlign: 'center' }}>
          <Space>
            <Button type='primary' htmlType='submit'>
              회원가입
            </Button>
          </Space>
        </div>
      </form>
    </>
  );
};

export default Signup;
