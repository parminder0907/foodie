import React, { useRef } from 'react';
import styled from 'styled-components';

const HorizontalScrollBox = ({ children }) => {
  const boxRef = useRef(null);

  const scrollLeft = () => {
    boxRef.current.scrollBy(-200, 0);
  };
  const scrollRight = () => {
    boxRef.current.scrollBy(200, 0);
  };

  return (
    <HorizontalBox>
      <ButtonLeft onClick={scrollLeft}>
        <LeftIcon
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </LeftIcon>
      </ButtonLeft>
      <ScrollBox ref={boxRef}>{children}</ScrollBox>
      <ButtonRight onClick={scrollRight}>
        <RightIcon
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </RightIcon>
      </ButtonRight>
    </HorizontalBox>
  );
};

export default HorizontalScrollBox;

const HorizontalBox = styled.div`
  width: 100%;
  position: relative;
`;
const ScrollBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

`;
const ButtonLeft = styled.button`
  position: absolute;
  top: 1rem;
  left: 0;
  height: 90%;
  width: 2rem;
  z-index: 1;
  cursor: pointer;
  border: none;
  background: linear-gradient(to right, white, transparent);
  transition: all .3s ease;
  &:hover {
      width: 2.5rem;
      color: red;
  }
  &:active {
    width: 3rem;
  }
`;
const LeftIcon = styled.svg`
  width: 2rem;
  height: 2rem;
`;
const ButtonRight = styled.button`
  position: absolute;
  top: 1rem;
  right: 0;
  height: 90%;
  width: 2rem;
  z-index: 1;
  cursor: pointer;
  border: none;
  background: linear-gradient(to left, white, transparent);
  transition: all .3s ease;

  &:hover {
      width: 2.5rem;
      color: red;
  }
  &:active {
    width: 3rem;
  }
`;
const RightIcon = styled.svg`
  width: 2rem;
  height: 2rem;
`;
