import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  // use props.location.pathname here to decide if you want to show sign in on the page we're currently on

  const userLoggedIn = () => (
    // logout button will be replaced with a modal that has a logout link inside
    <div className="nav-bar signed-in">
      <p>Welcome, {props.currentUser.email}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );

  const userLoggedOut = () => {
    if (props.location.pathname === "/login") {
      return (
        <div className="nav-bar signed-out">
          There will be a link to demo user here
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