import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function CategoryList() {
  return (
    <Wrapper>
      {categories?.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </Wrapper>
  );
}
