import React, { useContext } from 'react';
import AuthContext from '../contexts';
import { NavLink } from 'react-router-dom';
import { GoStar as IconStar, GoSearch as IconSearch } from 'react-icons/go';
import styled from 'styled-components';
import { lighten } from 'polished';
import { globalVars as vars } from '../styles/';

const NavbarWrapper = styled.nav`
  display: flex;
  height: 3rem;
  align-items: center;
  justify-content: space-between;
`;

const NavbarBrand = styled.a`
  color: ${vars.black};
  font-family: ${vars.fontHeadline};
  font-size: 1.2rem;
  letter-spacing: 1px;
  text-decoration: none;
`;

const NavbarLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  margin-left: 1rem;
  color: ${vars.black};
  text-decoration: none;
  transition: color 0.1s ease-in-out;

  > svg {
    margin-right: 0.3rem;
    color: ${lighten(0.2, vars.black)};
  }

  &:hover {
    color: #f67f5a;

    > svg {
      color: inherit;
    }
  }
`;

// TODO: Collapse NavbarLinks to declutter navigation UI for smaller screens.
const NavbarLinks = styled.ul`
  > li {
    display: inline;
  }
`;

const Navbar = function() {
  const { authenticated } = useContext(AuthContext);

  return (
    <NavbarWrapper>
      <NavbarBrand as={NavLink} to="/">
        StarTrak
      </NavbarBrand>

      {authenticated && (
        <NavbarLinks>
          <li>
            <NavbarLink to="/stars">
              <IconStar /> Stars
            </NavbarLink>
          </li>
          <li>
            <NavbarLink to="/search">
              <IconSearch /> Search
            </NavbarLink>
          </li>
        </NavbarLinks>
      )}
    </NavbarWrapper>
  );
};

export default Navbar;
