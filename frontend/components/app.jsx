import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import Footer from './footer/footer';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SplashContainer from './splash/splash_container';
import VideoIndexContainer from './videos/video_index_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import VideoPlayerContainer from './video_player/video_player_container';
import SearchIndexContainer from './search/search_index_container';
import GenreIndexContainer from './genres/genre_index_container';

const App = (props) => (
  <div id="main-div">
    <header>
      <NavBarContainer />
    </header>

    <Switch>
      {/* optional :genreId at the end? f.e if someone wants to see shows -> action shows */}
      {/* <ProtectedRoute path="/browse/genre/shows/:genreId?" component={GenreIndexContainer} type="SHOWS" />
      <ProtectedRoute path="/browse/genre/movies/:genreId?" component={GenreIndexContainer} type="MOVIES" /> */}
      <ProtectedRoute path="/browse/genre/shows" component={GenreIndexContainer} type="SHOWS" />
      <ProtectedRoute path="/browse/genre/movies" component={GenreIndexContainer} type="MOVIES" />
      <ProtectedRoute path="/browse" component={VideoIndexContainer} />
      <ProtectedRoute path="/search/:query" component={SearchIndexContainer} />
      <ProtectedRoute exact path="/watch/:mediaId" component={VideoPlayerContainer} type="fullPlayer" />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute path="/" component={SplashContainer} />
    </Switch>

    <Route exact path="/" component={Footer} />
    <Route exact path="/login" component={Footer} />
    <Route exact path="/signup" component={Footer} />  
  </div>
);

export default App;