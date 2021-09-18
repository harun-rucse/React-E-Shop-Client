import React from 'react';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Layout from '../components/Layout';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ImageWrapper = styled.div`
  flex: 1;
  padding: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 80vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 30px;
`;

const Title = styled.h2`
  font-size: 35px;
  font-weight: 200;
`;

const Description = styled.p`
  font-size: 16px;
  margin: 20px 0;
`;

const Price = styled.p`
  font-size: 35px;
  font-weight: 100;
`;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  width: 60%;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterText = styled.p`
  font-size: 20px;
  font-weight: 100;
  margin-right: 10px;
`;

const FilterColor = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 10px;
`;

const Option = styled.option`
  text-transform: capitalize;
`;

const PurchasesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  margin-top: 30px;
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

const Button = styled.button`
  border: 1px solid teal;
  outline: none;
  background-color: white;
  padding: 10px;

  &:hover {
    background-color: #eee;
    cursor: pointer;
  }
`;

export default function Product() {
  return (
    <Layout>
      <Wrapper>
        <ImageWrapper>
          <Image
            src="https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png"
            alt="product 1"
          />
        </ImageWrapper>
        <ContentWrapper>
          <Title>Denim T-Shirt</Title>
          <Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            laborum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Beatae libero inventore iste labore ad est vero id dicta quas
            corporis?
          </Description>
          <Price>$ 20</Price>
          <FilterWrapper>
            <Filter>
              <FilterText>Color:</FilterText>
              <FilterColor color="black" />
              <FilterColor color="blue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterText>Size:</FilterText>
              <Select defaultValue={''}>
                <Option disabled value="">
                  Size
                </Option>
                <Option value="xl">XS</Option>
                <Option value="s">S</Option>
                <Option value="m">M</Option>
                <Option value="l">L</Option>
                <Option value="xl">XL</Option>
              </Select>
            </Filter>
          </FilterWrapper>
          <PurchasesWrapper>
            <AmountWrapper>
              <FaMinus style={{ cursor: 'pointer' }} />
              <Amount>1</Amount>
              <FaPlus style={{ cursor: 'pointer' }} />
            </AmountWrapper>
            <Button>Add To Cart</Button>
          </PurchasesWrapper>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
}
