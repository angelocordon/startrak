import React, { useState, useEffect } from 'react';
import { ApolloProvider } from 'react-apollo-hooks';
import client from './apolloClient';
import { AuthProvider } from './contexts';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles';
import { Navbar } from './components';
import Auth from './auth';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState('');

  const toggleAuthentication = val => {
    localStorage.setItem('⭐', JSON.stringify({ authenticated: val }));
    setAuthenticated(val);
  };

  // Define authentication context to be shared with different components
  const authContext = {
    authenticated: authenticated,
    toggleAuthentication: toggleAuthentication,
    setAccessToken: setAccessToken,
    auth: new Auth(),
  };

  // Passing an empty array as a second argument to `useEffect()` limits
  // invoking the hook to when the component mounts.
  // Ref: https://www.robinwieruch.de/react-hooks-fetch-data/
  useEffect(() => {
    // Check to see if user has authenticated before.
    // Storage objects currently only store string types. Using JSON.parse()
    // here allows us to retrieve actual booleans.
    const session = JSON.parse(localStorage.getItem('⭐'));
    if (session && session.authenticated) {
      setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (accessToken.length > 0) {
      toggleAuthentication(true);
      console.log(accessToken);
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
