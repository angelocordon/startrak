import React, { useEffect, useContext, useState } from 'react';
import AuthContext from '../contexts';
import { Redirect } from 'react-router-dom';
import { LoadingUI } from '../components';

export default function AuthPage() {
  const { authenticated, auth, setAccessToken } = useContext(AuthContext);
  const [authentication, setAuthentication] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search.substr(1));
    const code = params.get('code');
    const state = params.get('state');
    const session = JSON.parse(localStorage.getItem('⭐'));
    const csrf = session ? session.csrf_token : null;

    if (state === csrf) {
      let mounted = true;

      (async () => {
        const response = await auth.authenticate(code);
        if (mounted) {
          setAuthentication(response);
        }
      })();

      return () => {
        mounted = false;
      };
    }
  }, [auth]);

  useEffect(() => {
    if (authentication.accessToken) {
      setAccessToken(authentication.accessToken);
    }
  }, [authentication, setAccessToken]);

  if (authentication.error) {
    return (
      <div>
        <p>There was an error with connecting to your GitHub account.</p>
        {/* Typically, this error message would be posted through a logging service (Bugsnag, Raygun, Sentry); a normal user wouldn't need to know about this. */}
        <p>{authentication.error.description}</p>
        <p>
          For reference, see this <a href={authentication.error.uri}>article</a>
          .
        </p>
      </div>
    );
  }

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return <LoadingUI />;
}
