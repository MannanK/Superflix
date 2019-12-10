import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  // use props.location.pathname here to decide if you want to show sign in on the page we're currently on

  const handleDemoLogin = (e) => {
    e.preventDefault();

    // TODO: change demo user info later

    const demoUser = { email: "tommy@tommy.com", password: "hunter2" };
    props.login(demoUser);
  };
  
  const userLoggedIn = () => (
    // logout button will be replaced with a modal that has a logout link inside
    <div className="nav-bar signed-in">
      <img src={window.logo} className="logo"></img>
      <p>Welcome, {props.currentUser.email}!</p>
      <button onClick={props.logout}>Logout</button>
    </div>
  );

  const userLoggedOut = () => {
    if (props.location.pathname === "/login") {
      return (
        <div className="nav-bar signed-out">
          <img src={window.logo} className="logo"></img>
          <button className="nav-bar-button" onClick={handleDemoLogin}>Demo Superflix!</button>
        </div>
      );
    } else {
      return (
        <div className="nav-bar signed-out">
          <img src={window.logo} className="logo"></img>
          <Link to="/login" className="login-link">
            <button className="nav-bar-button">Sign In</button>
          </Link>
        </div>
      );
    }
  };
  
  // if currentUser exists, render userLoggedIn(), otherwise userLoggedOut()
  return props.currentUser ? userLoggedIn() : userLoggedOut();
};

export default NavBar;