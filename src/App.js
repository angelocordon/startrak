import React, { useState } from 'react';
import { ApolloProvider } from 'react-apollo-hooks';
import client from './apolloClient';
import { AuthProvider } from './contexts';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import GlobalStyle from './styles';
import { Navbar } from './components';
import { AuthenticatedRoute, RootRoute } from './routes';
import { HomePage, SearchPage, StarsPage } from './pages';

export default function App() {
  const [authenticated, setAuthenticated] = useState(true);

  const authenticateUser = function() {
    setAuthenticated(true);
  };

  const authContext = {
    authenticated: authenticated,
    toggleAuth: toggleAuthentication,
  };
  return (
    <>
      <GlobalStyle />
      <Router>
        <AuthProvider value={authContext}>
          <Navbar />
          <ApolloProvider client={client}>
            <Switch>
              <RootRoute
                exact
                path="/"
                component={HomePage}
                authComponent={StarsPage}
              />
              <AuthenticatedRoute path="/search" component={SearchPage} />
              <AuthenticatedRoute path="/stars" component={StarsPage} />
            </Switch>
          </ApolloProvider>
        </AuthProvider>
      </Router>
    </>
  );
}
