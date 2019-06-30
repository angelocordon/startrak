import React, { useState, useEffect } from 'react';
import { ApolloProvider } from 'react-apollo-hooks';
import { setApolloClient } from './apolloClient';
import { AuthProvider } from './contexts';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles';
import { Navbar } from './components';
import Auth from './auth';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState();
  const [client, setClient] = useState();

  // Define authentication context to be shared with different components
  const authContext = {
    authenticated: authenticated,
    setAccessToken: setAccessToken,
    Auth: new Auth(),
  };

  const updateApolloClient = token => {
    const apolloClient = setApolloClient(token);
    setClient(apolloClient);
  };

  // On component mount, check to see if user can be authenticated already.
  // Passing an array as a second argument to `useEffect()` defines the hook
  // to only run on component mount.
  // Ref: https://www.robinwieruch.de/react-hooks-fetch-data/
  useEffect(() => {
    const token = localStorage.getItem('⭐.token');

    // TODO: This does not consider expired tokens; it's possible that a token
    // might be expired and so long that there is something set in the
    // localStorage, this falsely authenticates a user. However, expired
    // tokens will not allow a user to interact with GitHub's GQL API.
    if (token) {
      setAccessToken(token);
    }
  }, []);

  // When `accessToken` is updated, ensure to update the `client` for
  // the ApolloClient context as well.
  useEffect(() => {
    // Function in this callback to prevent exhaustive dependencies.
    // Ref: https://twitter.com/dan_abramov/status/1103744582074990594?lang=en
    const authenticate = token => {
      // NOTE: Definitely not advisable to do this in a production app!!
      // Recomend looking into other services such as Auth0 or Firebase
      localStorage.setItem('⭐.token', token);
      setAuthenticated(true);
      updateApolloClient(token);
    };

    if (accessToken) {
      authenticate(accessToken);
    }
  }, [accessToken]);

  return (
    <>
      <GlobalStyle />
      <Router>
        <AuthProvider value={authContext}>
          <Navbar />
          <ApolloProvider client={client}>
            <Routes />
          </ApolloProvider>
        </AuthProvider>
      </Router>
    </>
  );
}
