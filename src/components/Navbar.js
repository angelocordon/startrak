import React from 'react';
import styled from 'styled-components';
import { globalVars } from '../styles/';

const NavbarWrapper = styled.nav`
  display: flex;
  height: 3rem;
  align-items: center;
`;

const NavbarBrand = styled.span`
  font-family: ${globalVars.fontHeadline};
  font-size: 1.2rem;
  letter-spacing: 1px;
`;

const Navbar = function() {
  return (
    <NavbarWrapper>
      <NavbarBrand>StarTrak</NavbarBrand>
    </NavbarWrapper>
  );
};

export default Navbar;
