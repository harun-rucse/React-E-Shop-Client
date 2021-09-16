import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import ProductItem from './ProductItem';

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export default function ProductList() {
  return (
    <Wrapper>
      {popularProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Wrapper>
  );
}
