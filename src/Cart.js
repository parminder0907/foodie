import React from 'react';
import styled from 'styled-components';

import PopUp from './PopUp';
import Liked from './Liked';
import SideMenu from './SideMenu';
import Logo from './utils/Logo';

const Cart = ({ searchText, setSearchText, setFood }) => {
  return (
    <Wrap>
      <Nav>
        <div>
          <SideMenu searchText={searchText} setSearchText={setSearchText} />
        </div>
        <LogoWrap
          onClick={() => {
            setSearchText('');
            setFood([]);
          }}
        >
          <Logo />
        </LogoWrap>
        <Icons>
          <Liked />
          <PopUp />
        </Icons>
      </Nav>
    </Wrap>
  );
};

export default Cart;

const Icons = styled.div`
  display: flex;
  width: 5rem;
`;
const Wrap = styled.div`
  position: fixed;
  width: 100%;
  background-color: #fff;
  z-index: 50;
`;
const LogoWrap = styled.div`
  cursor: pointer;
`;
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem 2rem;
`;
