import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { sliderItems } from '../data';
import { tablet, mobile } from '../utils/responsive';

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  position: relative;
  overflow: hidden;

  ${tablet({ height: '40vh' })}
  ${mobile({ display: 'none' })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff7f7;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.7;
  z-index: 1;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const SlideWrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  min-width: 100vw;
  height: 100%;
  align-items: center;
  background-color: #${(props) => props.bg};
  justify-content: center;
`;

const ImageWrapper = styled.div`
  flex: 1;
  height: 80%;
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-size: 70px;
  font-weight: 300;
  text-transform: uppercase;
  ${tablet({ fontSize: '40px' })}
`;

const Description = styled.p`
  width: 90%;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 2px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  outline: none;
  border: 1px solid teal;
  padding: 10px 15px;
  font-size: 18px;
  background-color: transparent;
  text-transform: uppercase;
  cursor: pointer;
`;

export default function Slider() {
  const history = useHistory();
  const [slideIndex, setSlideIndex] = useState(0);
  const data = sliderItems;

  function handleLeftArrow() {
    setSlideIndex((preState) =>
      preState > 0 ? preState - 1 : data.length - 1
    );
  }

  function handleRightArrow() {
    setSlideIndex((preState) =>
      preState < data.length - 1 ? preState + 1 : 0
    );
  }

  return (
    <Wrapper>
      <Arrow direction="left" onClick={handleLeftArrow}>
        <FaAngleLeft />
      </Arrow>
      <SlideWrapper slideIndex={slideIndex}>
        {data?.map(({ id, bg, title, image, description }) => (
          <Slide key={id} bg={bg}>
            <ImageWrapper>
              <Image src={image} alt={title} />
            </ImageWrapper>
            <ContentWrapper>
              <Title>{title}</Title>
              <Description>{description}</Description>
              <Button onClick={() => history.push('/shop')}>Shop now</Button>
            </ContentWrapper>
          </Slide>
        ))}
      </SlideWrapper>
      <Arrow direction="right" onClick={handleRightArrow}>
        <FaAngleRight />
      </Arrow>
    </Wrapper>
  );
}
