import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 30px;
  width: 100%;
  background: teal;
  color: white;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Announcement() {
  return <Wrapper>Super deal! Free shipping on orders over $50</Wrapper>;
}
