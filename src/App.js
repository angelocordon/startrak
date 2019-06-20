import React, { useState } from 'react';
import GlobalStyle from './styles';
import { Navbar } from './components/';
import AuthenticateModule from './modules/Authenticate';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <main>{!authenticated ? <AuthenticateModule /> : null}</main>
    </>
  );
}
