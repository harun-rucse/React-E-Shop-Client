import React from 'react';
import styled from 'styled-components';
import { RiSendPlaneFill } from 'react-icons/ri';
import { mobile, tablet } from '../utils/responsive';

const Wrapper = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${tablet({ height: '50vh' })}
  ${mobile({ height: '40vh' })}
`;
const Title = styled.h2`
  font-size: 70px;
  font-weight: 500;
  ${mobile({ fontSize: '40px' })}
`;
const Description = styled.p`
  font-size: 20px;
  ${mobile({ fontSize: '14px' })}
`;
const InputWrapper = styled.div`
  margin-top: 20px;
  width: 50%;
  height: 40px;
  background-color: white;
  border: 1px solid teal;
  display: flex;
  ${mobile({ width: '80%' })}
`;
const Input = styled.input`
  flex: 8;
  border: none;
  outline: none;
  padding-left: 10px;
  font-size: 16px;
  ${mobile({ flex: 5 })}
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default function NewsLetter() {
  return (
    <Wrapper>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products</Description>
      <InputWrapper>
        <Input placeholder="Your email address" />
        <Button>
          <RiSendPlaneFill />
        </Button>
      </InputWrapper>
    </Wrapper>
  );
}
