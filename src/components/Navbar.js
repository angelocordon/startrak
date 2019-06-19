import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

const NavbarWrapper = styled.nav`
  display: flex;
  padding: 0 1rem;
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid ${rgba('#000', 0.3)};
  align-items: center;
`;

export const Navbar = function() {
  return <NavbarWrapper>StarTrak</NavbarWrapper>;
};
