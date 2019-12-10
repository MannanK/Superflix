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
      <p>Welcome, {props.currentUser.email}!</p>
      <button onClick={props.logout}>Logout</button>
    </div>
  );

  const userLoggedOut = () => {
    if (props.location.pathname === "/login") {
      return (
        <div className="nav-bar signed-out">
          <button className="demo-login-nav" onClick={handleDemoLogin}>Demo Superflix!</button>
        </div>
      );
    } else {
      return (
        <div className="nav-bar signed-out">
          <Link to="/login" className="login-link">Sign In</Link>
        </div>
      );
    }
  };
  
  // if currentUser exists, render userLoggedIn(), otherwise userLoggedOut()
  return props.currentUser ? userLoggedIn() : userLoggedOut();
};

export default NavBar;