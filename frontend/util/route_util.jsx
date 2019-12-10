import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props => !loggedIn ? <Component {...props} /> : <Redirect to="/" />}
  />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props => loggedIn ? <Component {...props} /> : <Redirect to="/" />}
  />
);

const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.currentUserId) };
};

export const AuthRoute = connect(mapStateToProps)(Auth);
export const ProtectedRoute = connect(mapStateToProps)(Protected);