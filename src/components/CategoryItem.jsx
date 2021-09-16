import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  height: 60vh;
  margin: 3px;
  position: relative;
  opacity: 0.7;
  transition: all 0.4s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h4`
  font-size: 25px;
  font-weight: 600;
  color: white;
`;
const Button = styled.button`
  outline: none;
  border: none;
  padding: 10px 15px;
  border: 1px solid teal;
  background: transparent;
  font-size: 16px;
  color: white;
  text-transform: uppercase;
  margin-top: 20px;
  transition: all 0.4s ease;

  &:hover {
    cursor: pointer;
    background: teal;
  }
`;

export default function CategoryItem({ category }) {
  return (
    <Wrapper>
      <Image src={category.image} alt={category.title} />
      <Content>
        <Title>{category.title}</Title>
        <Button>Shop now</Button>
      </Content>
    </Wrapper>
  );
}
