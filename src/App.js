import React, { useState } from 'react';
import GlobalStyle from './styles';
import { Navbar } from './components';
import { AuthenticateModule, AuthenticatedModule } from './modules';

export default function App() {
  const [authenticated, setAuthenticated] = useState(true);

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
        ) : (
          <AuthenticatedModule />
        )}
      </main>
    </>
  );
}
