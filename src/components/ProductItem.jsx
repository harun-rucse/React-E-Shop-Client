import React from 'react';
import styled from 'styled-components';
import { FaShoppingCart, FaSearch, FaHeart } from 'react-icons/fa';

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 2;
  opacity: 0;
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  background-color: #f5fbfd;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover ${Content} {
    opacity: 1;
    cursor: pointer;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  object-fit: cover;
  z-index: 1;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export default function ProductItem({ product }) {
  return (
    <Wrapper>
      <Circle />
      <Image src={product.image} alt="Product Image" />
      <Content>
        <Icon>
          <FaShoppingCart />
        </Icon>
        <Icon>
          <FaSearch />
        </Icon>
        <Icon>
          <FaHeart />
        </Icon>
      </Content>
    </Wrapper>
  );
}
