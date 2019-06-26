import React, { useState, useEffect } from 'react';
import { ApolloProvider } from 'react-apollo-hooks';
import client from './apolloClient';
import { AuthProvider } from './contexts';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import GlobalStyle from './styles';
import { Navbar } from './components';
import { AuthenticatedRoute, RootRoute } from './routes';
import { HomePage, SearchPage, StarsPage } from './pages';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  // TODO: Set up oauth flow; faking this for now and using a secure service
  // to handle authentication (Auth0, Firebase) would be better.
  const toggleAuthentication = function() {
    localStorage.setItem('StarTrak.auth', true);
    setAuthenticated(true);
  };

  const authContext = {
    authenticated: authenticated,
    toggleAuth: toggleAuthentication,
  };

  // Effect hook to persist authenticated sessions; passing a depency array as a
  // second argument limits invoking the effect only on component mount and
  // when the authenticated state is updated vs on every render.
  // Ref: https://www.robinwieruch.de/react-hooks-fetch-data/
  useEffect(() => {
    if (!localStorage.getItem('StarTrak.auth')) {
      localStorage.setItem('StarTrak.auth', authenticated);
    }

    // Storage objects currently only store string types. Using JSON.parse()
    // here allows us to retrieve actual booleans.
    const sessionAuth = JSON.parse(localStorage.getItem('StarTrak.auth'));
    setAuthenticated(sessionAuth);
  }, [authenticated]);

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
