import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact, ...rest }) => (
  <Route
    path={path}
    exact={exact}
    {...rest}
    render={props => !loggedIn ? <Component {...props} {...rest} /> : <Redirect to="/browse" />}
  />
);

const Protected = ({ component: Component, path, loggedIn, exact, ...rest }) => {
  return (
    <Route
      path={path}
      exact={exact}
      {...rest}
      render={props => loggedIn ? <Component {...props} {...rest} /> : <Redirect to="/" />}
    />
  );
};

const mapStateToProps = (state) => {
  return { loggedIn: Boolean(state.session.currentUserId) };
};

export const AuthRoute = connect(mapStateToProps)(Auth);
export const ProtectedRoute = connect(mapStateToProps)(Protected);