import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../contexts';
import { Redirect } from 'react-router-dom';
import { LoadingUI } from '../components';

export default function AuthPage() {
  const { authenticated, setAccessToken, Auth } = useContext(AuthContext);
  const [authResponse, setAuthResponse] = useState({});

  // On component mount, parse through returned URL params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search.substr(1));
    const state = params.get('state');
    const csrf = localStorage.getItem('⭐.csrf');

    // Check to make sure that state is not null when getting redirected URL
    // and make sure that local csrf token matches responded state token
    // for security measures.
    if (state && state === csrf) {
      const code = params.get('code');

      let fetching = true;

      (async () => {
        const response = await Auth.authenticate(code);
        if (fetching) {
          setAuthResponse(response);
        }
      })();

      // Clean up function to cancel asynchronous tasks within hooks.
      return () => {
        fetching = false;
      };
    }
  }, [Auth]);

  // Effects for when `authResponse` is updated from authenticating
  useEffect(() => {
    // Because authResponse is expected to be an object, check to make sure that
    // it has entries inside, and not invoking from initial state.
    if (authResponse.accessToken) {
      setAccessToken(authResponse.accessToken);
    }
  }, [authResponse, setAccessToken]);

  // If user is already authenticated, return to authenticated root route.
  if (authenticated) {
    return <Redirect to="/" />;
  }

  if (authResponse.error) {
    return (
      <div>
        <p>There was an error with connecting to your GitHub account.</p>
        <p>{authResponse.error.description}</p>
        <p>
          For reference, see this <a href={authResponse.error.uri}>article</a>.
        </p>
      </div>
    );
  }

  return <LoadingUI />;
}
