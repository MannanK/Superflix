import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SplashContainer from './splash/splash_container';
import MediaIndexContainer from './media/media_index_container';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>

    <Switch>
      <ProtectedRoute exact path="/browse" component={MediaIndexContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/" component={SplashContainer} />
    </Switch>
  </div>
);

export default App;