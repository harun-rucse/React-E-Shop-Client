import React from 'react';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { mobile, tablet } from '../utils/responsive';

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  ${tablet({ width: '150px' })}
  ${mobile({ width: '140px' })}
`;

const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 40px 20px;
`;

const ProductName = styled.span``;

const ProductColor = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Amount = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  font-weight: 600;
  border: 1px solid teal;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0 10px;
`;

const Price = styled.p`
  font-size: 30px;
  font-weight: 200;
  margin-top: 10px;
`;

export default function CartProduct({ product }) {
  return (
    <Product>
      <ProductDetail>
        <Image src={product.image} alt={product.title} />
        <DetailWrapper>
          <ProductName>
            <b>Product:</b> {product.title}
          </ProductName>
          <ProductColor color={product.color} />
          <ProductSize>
            <b>Size:</b> {product.size}
          </ProductSize>
        </DetailWrapper>
      </ProductDetail>
      <PriceDetail>
        <AmountWrapper>
          <FaMinus style={{ cursor: 'pointer' }} />
          <Amount>1</Amount>
          <FaPlus style={{ cursor: 'pointer' }} />
        </AmountWrapper>
        <Price>$ {product.price}</Price>
      </PriceDetail>
    </Product>
  );
}
