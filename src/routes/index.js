import React, { useContext } from 'react';
import propTypes from 'prop-types';
import AuthContext from '../contexts';
import { Route, Switch, Redirect } from 'react-router-dom';
import { HomePage, SearchPage, StarsPage } from '../pages';

const AuthenticatedRoute = function(props) {
  const { authenticated } = useContext(AuthContext);
  if (authenticated) {
    return <Route {...props} />;
  }

  return <Redirect to="/" />;
};

const RootRoute = function({ component, authComponent, ...props }) {
  const { authenticated } = useContext(AuthContext);

  if (authenticated) {
    return <Route {...props} component={authComponent} />;
  }

  return <Route {...props} component={component} />;
};

const Routes = function() {
  return (
    <Switch>
      <RootRoute
        exact
        path="/"
        component={HomePage}
        authComponent={SearchPage}
      />
      <AuthenticatedRoute path="/search" component={SearchPage} />
      <AuthenticatedRoute path="/stars" component={StarsPage} />
    </Switch>
  );
};

export default Routes;

RootRoute.propTypes = {
  component: propTypes.elementType,
  authComponent: propTypes.elementType,
};
