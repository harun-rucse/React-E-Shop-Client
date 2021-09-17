import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';

const Title = styled.h4`
  font-size: 30px;
  font-weight: 400;
  margin: 20px;
`;
const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  padding: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 400;
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 10px;
`;
const Option = styled.option`
  text-transform: capitalize;
`;

export default function Shop() {
  return (
    <Layout>
      <Title>Dresses</Title>
      <FilterWrapper>
        <Filter>
          <FilterText> Filter Products:</FilterText>
          <Select defaultValue={''}>
            <Option value="">Color</Option>
            <Option value="white">White</Option>
            <Option value="black">Black</Option>
            <Option value="red">Red</Option>
            <Option value="blue">Blue</Option>
            <Option value="yellow">Yellow</Option>
            <Option value="green">Green</Option>
          </Select>
          <Select defaultValue={''}>
            <Option value="">Size</Option>
            <Option value="xl">XS</Option>
            <Option value="s">S</Option>
            <Option value="m">M</Option>
            <Option value="l">L</Option>
            <Option value="xl">XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText> Sort Products:</FilterText>
          <Select defaultValue={''}>
            <Option value="">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="dec">Price (dec)</Option>
          </Select>
        </Filter>
      </FilterWrapper>
      <ProductList />
    </Layout>
  );
}
