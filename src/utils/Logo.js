import React from 'react';
import styled, { keyframes } from 'styled-components';

const Logo = () => {
  return (
    <LogoWrap>
      <LogoStyle>Foodi</LogoStyle>
      <LetterE>e</LetterE>
    </LogoWrap>
  );
};

export default Logo;

const LogoWrap = styled.div`
  height: 5rem;
  width: 6rem;
  display: flex;
  align-items: center;
`;
const translate = keyframes`
  0% {
    transform: translateY(0) ;
  }
  25% {
    transform: translateY(-3px);
  }
  50%,100% {
    transform: translateY(0) ;
  }
`;
const LetterE = styled.span`
  color: red;
  animation: ${translate} 2s linear infinite;
  font-size: 2.4rem;
  font-family: 'Righteous', cursive;
`;
const LogoStyle = styled.h1`
  font-size: 2.2rem;
  font-family: 'Roboto';
  position: relative;
  color: #444;
  font-family: 'Righteous', cursive;
`;
