import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import Footer from './footer/footer';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SplashContainer from './splash/splash_container';
import VideoIndexContainer from './videos/video_index_container';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = (props) => (
  <div id="main-div">
    <div id="main-content">
      <header>
        <NavBarContainer />
      </header>

      <Switch>
        <ProtectedRoute path="/browse" component={VideoIndexContainer} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <AuthRoute path="/" component={SplashContainer} />
      </Switch>
    </div>

    <Route exact path="/" component={Footer} />
    <Route exact path="/login" component={Footer} />
    <Route exact path="/signup" component={Footer} />
  </div>
);

export default App;