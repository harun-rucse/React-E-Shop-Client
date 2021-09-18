import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Announcement from '../components/Announcement';

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 30px;
  min-width: 25%;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: 200;
  text-transform: uppercase;
  margin-bottom: 20px;
  text-align: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 50%;
  padding: 10px 20px;
  margin-bottom: 10px;
  font-size: 14px;
`;

const Button = styled.button`
  border: none;
  background-color: teal;
  padding: 10px;
  color: white;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 10px;
`;

const AlternativeWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  align-items: center;
`;

const Text = styled.p`
  font-size: 14px;
  margin-right: 5px;
`;

export default function Login() {
  return (
    <>
      <Announcement />
      <Header />
      <Wrapper>
        <Form>
          <Title>Sign In</Title>
          <Input type="email" placeholder="Email address" required />
          <Input type="password" placeholder="Password" required />
          <Button type="submit">Sign In</Button>
          <AlternativeWrapper>
            <Text>Don't have an account?</Text>
            <Link
              to="/register"
              style={{ fontSize: '14px', fontWeight: '500' }}
            >
              Regist now
            </Link>
          </AlternativeWrapper>
        </Form>
      </Wrapper>
      <Footer />
    </>
  );
}
