import React, { useContext } from 'react';
import AuthContext from '../contexts';
import styled from 'styled-components';
import { rgba } from 'polished';
import { Headline, Button } from '../components';
import { GoMarkGithub } from 'react-icons/go';

const SignUpButton = styled(Button)`
  display: inline-flex;
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

export default function HomePage() {
  const { auth } = useContext(AuthContext);

  const authenticate = function() {
    // Pass CSRF token through localStorage to be able to match the state params
    // return from GitHub oauth
    localStorage.setItem('⭐', JSON.stringify({ csrf_token: auth.state }));
    return window.open(auth.authURL, '_blank');
  };

  return (
    <main>
      <Headline>
        To boldy star repositories you haven't starred before.
      </Headline>
      <p>
        Connect your GitHub account to view your starred repositories and
        explore many more.
      </p>
      <SignUpButton onClick={authenticate}>
        <GoMarkGithub /> Connect with GitHub
      </SignUpButton>
    </main>
  );
}
