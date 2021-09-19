import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import styled from 'styled-components';
import { tablet, mobile } from '../utils/responsive';

const Wrapper = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column' })}
`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h2`
  font-size: 30px;
  font-weight: 400;
`;
const Description = styled.p`
  font-size: 15px;
  margin: 20px 0;
`;
const SocilaWrapper = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  transition: all 0.4s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: 'none' })}
`;

const Heading = styled.h4`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const ListWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  ${tablet({ width: '100%' })}
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: auto;
  ${mobile({ marginLeft: '0', backgroundColor: '#fff6f6' })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Left>
        <Title>E-Shop</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          distinctio ad illo odio iste! Cupiditate ratione impedit cum est? Amet
          laudantium sed, quisquam totam inventore eos. Blanditiis dicta ad
          alias.
        </Description>
        <SocilaWrapper>
          <SocialIcon bg="3B5999">
            <FaFacebook style={{ fontSize: '20px', color: 'white' }} />
          </SocialIcon>
          <SocialIcon bg="E4405F">
            <FaInstagram style={{ fontSize: '20px', color: 'white' }} />
          </SocialIcon>
          <SocialIcon bg="55ACEE">
            <FaTwitter style={{ fontSize: '20px', color: 'white' }} />
          </SocialIcon>
          <SocialIcon bg="E60023">
            <FaPinterest style={{ fontSize: '20px', color: 'white' }} />
          </SocialIcon>
        </SocilaWrapper>
      </Left>
      <Center>
        <Heading>Useful Links</Heading>
        <ListWrapper>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </ListWrapper>
      </Center>
      <Right>
        <Heading>Contact Us</Heading>
        <ContactItem>
          <FaMapMarkerAlt style={{ fontSize: '18px', marginRight: '5px' }} />
          22/A Mirpur 10, Dhaka- 1200
        </ContactItem>
        <ContactItem>
          <FaPhoneAlt style={{ fontSize: '18px', marginRight: '5px' }} />
          +8801700000000
        </ContactItem>
        <ContactItem>
          <GrMail style={{ fontSize: '18px', marginRight: '5px' }} />
          contact@eshop.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Wrapper>
  );
}
