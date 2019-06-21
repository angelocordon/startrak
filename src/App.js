import React, { useState } from 'react';
import { ApolloProvider } from 'react-apollo-hooks';
import client from './apolloClient';
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
      <ApolloProvider client={client}>
        <main>
          {!authenticated ? (
            <AuthenticateModule handleAuthentication={authenticateUser} />
          ) : (
            <AuthenticatedModule />
          )}
        </main>
      </ApolloProvider>
    </>
  );
}
