import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rgba } from 'polished';
import { Headline, Button } from '../components';

const SignUpButton = styled(Button)`
  background-color: #2c3e50;
  border-color: transparent;
  color: #fff;
  transition: all 0.1s ease-in-out;

  &:hover {
    box-shadow: 0px 10px 12px -6px ${rgba('#2c3e50', 0.3)};
    transform: translateY(-0.2rem);
  }

  @media (max-width: 320px) {
    width: 100%;
  }
`;

export default function AuthenticateModule({ handleAuthentication }) {
  // TODO: Handle Authentication properly with GitHub's OAuth web flow, or
  // potentially explore a service with Firebase or Auth0.
  const authenticate = function() {
    handleAuthentication();
  };

  return (
    <>
      <Headline>
        To boldy star repositories you haven't starred before.
      </Headline>
      <p>
        Connect your GitHub account to view your starred repositories and
        explore many more.
      </p>
      <SignUpButton onClick={authenticate}>Connect with GitHub</SignUpButton>
    </>
  );
}

AuthenticateModule.propTypes = {
  handleAuthentication: PropTypes.func,
};
