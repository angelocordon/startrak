import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { Navbar } from './components/Navbar';

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  html { font-size: 16px }

  body { line-height: 1.5 }
`;

const MainPanel = styled.main`
  padding: 1rem;
`;

const SignUpButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 1rem 2rem;
  background-color: #2c3e50;
  border-color: transparent;
  border-radius: 3px;
  color: #fff;
  letter-spacing: 1px;

  @media (max-width: 320px) {
    width: 100%;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <MainPanel>
        {/* 
          Search for repositories
          List repositories belonging to User 
          or List Search Results 
        */}
        <p>
          Connect with your GitHub account to view your starred repositories.
        </p>
        <SignUpButton>Connect with GitHub</SignUpButton>
      </MainPanel>
    </>
  );
}

export default App;
