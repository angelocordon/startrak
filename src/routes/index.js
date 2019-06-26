import React, { useContext } from 'react';
import propTypes from 'prop-types';
import AuthContext from '../contexts';
import { Route, Redirect } from 'react-router-dom';

export function AuthenticatedRoute(props) {
  const { authenticated } = useContext(AuthContext);
  if (authenticated) {
    return <Route {...props} />;
  }

  return <Redirect to="/" />;
}

export function RootRoute({ component, authComponent, ...props }) {
  const { authenticated } = useContext(AuthContext);

  if (authenticated) {
    return <Route {...props} component={authComponent} />;
  }

  return <Route {...props} component={component} />;
}

RootRoute.propTypes = {
  component: propTypes.elementType,
  authComponent: propTypes.elementType,
};
