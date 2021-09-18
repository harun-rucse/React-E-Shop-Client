import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import CartProduct from '../components/CartProduct';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { cartProducts } from '../data';

const Wrapper = styled.div`
  margin-bottom: 50px;
`;

const Heading = styled.h2`
  font-size: 30px;
  font-weight: 200;
  text-align: center;
  margin-top: 20px;
  text-transform: uppercase;
`;

const ActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  margin: 30px 0;
`;

const Action = styled.div``;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  text-transform: uppercase;
  background-color: ${(props) => (props.outlined ? 'white' : 'black')};
  color: ${(props) => (props.outlined ? 'black' : 'white')};
  border: ${(props) => (props.outlined ? '2px solid teal' : 'none')};
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px 20px 20px;
`;

const ProductInfo = styled.div`
  flex: 3;
`;

const ProductSummary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 60vh;
`;

const SummaryTitle = styled.h2`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '400'};
  font-size: ${(props) => props.type === 'total' && '24px'};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Hr = styled.hr`
  border: none;
  background-color: #eee;
  height: 1px;
`;

export default function Cart() {
  return (
    <>
      <Announcement />
      <Header />
      <Wrapper>
        <Heading>Your Bag</Heading>
        <ActionWrapper>
          <Button outlined>Continue Shopping</Button>
          <Action>
            <Link
              to="/cart"
              style={{
                textDecoration: 'underline',
                fontWeight: 600,
                marginRight: '15px',
              }}
            >
              SHopping bag(2)
            </Link>
            <Link
              to="/whishlist"
              style={{ textDecoration: 'underline', fontWeight: 600 }}
            >
              Your Wishlist(0)
            </Link>
          </Action>
          <Button>Checkout now</Button>
        </ActionWrapper>
        <ContentWrapper>
          <ProductInfo>
            {cartProducts.map((product, index) => (
              <Fragment key={product.id}>
                <CartProduct product={product} />
                {cartProducts.length > index + 1 && <Hr />}
              </Fragment>
            ))}
          </ProductInfo>
          <ProductSummary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>-$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 50</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </ProductSummary>
        </ContentWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}
