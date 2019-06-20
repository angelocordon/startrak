import React, { useState } from 'react';
import GlobalStyle from './styles';
import { Navbar } from './components/';
import AuthenticateModule from './modules/Authenticate';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const authenticateUser = function() {
    setAuthenticated(true);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <main>
        {!authenticated ? (
          <AuthenticateModule handleAuthentication={authenticateUser} />
        ) : null}
      </main>
    </>
  );
}
