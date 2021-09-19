import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { mobile } from '../utils/responsive';

const Container = styled.div`
  height: 60px;
  ${mobile({ height: '50px' })}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  ${mobile({ padding: '10px 0', paddingRight: '10px' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Language = styled.h4`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`;

const SearchWrapper = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-left: 30px;
  ${mobile({ marginLeft: '10px' })}
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: '50px' })}
`;

const IconWrapper = styled.div``;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h2`
  font-size: 30px;
  font-weight: bold;
  ${mobile({ fontSize: '20px' })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  ${mobile({ flex: 2 })}
`;

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  text-transform: uppercase;
`;

const Icon = styled.div`
  position: relative;
`;

const Badge = styled.span`
  background: #90caf9;
  color: rgba(0, 0, 0, 0.87);
  height: 20px;
  width: 20px;
  border-radius: 50%;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  position: absolute;
  top: -10px;
  right: -14px;
`;

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchWrapper>
            <Input />
            <IconWrapper>
              <FaSearch
                style={{
                  color: 'gray',
                  fontSize: '16px',
                }}
              />
            </IconWrapper>
          </SearchWrapper>
        </Left>
        <Center>
          <Link to="/">
            <Logo>E-Shop</Logo>
          </Link>
        </Center>
        <Right>
          <Link to="/register">
            <MenuItem>Register</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>Login</MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <Icon>
                <FaShoppingCart style={{ fontSize: '20px' }} />
                <Badge>5</Badge>
              </Icon>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}
