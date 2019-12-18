import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false
    };

    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  // use props.location.pathname here to decide if you want to show sign in on the page we're currently on

  handleDemoLogin(e) {
    e.preventDefault();

    const demoUser = { email: "peter@parker.com", password: "uncleben" };
    this.props.login(demoUser);
  }

  getLinkTag(route) {
    let linkText;

    switch (route) {
      case "/browse":
        linkText = "Home";
        break;
      default:
        linkText = "This isn't supposed to be here!";
        break;
    }

    if (this.props.location.pathname === route) {
      return (
        <Link to={route} className="nav-bar-link active">{linkText}</Link>
      );
    } else {
      return (
        <Link to={route} className="nav-bar-link">{linkText}</Link>
      );
    }
  }

  userLoggedIn() {
    const { currentUser, logout, location } = this.props;
    
    if (location.pathname.startsWith("/watch")) return "";

    const { showDropdown } = this.state;

    let dropdown = showDropdown ? (
      <Dropdown
        user={currentUser}
        hideDropdown={() => this.setState({ showDropdown: false })}
        logout={logout}
      />
    ) : "";

    return (
      <div className="nav-bar signed-in">
        <Link to="/browse"><img src={window.logo} className="logo-small"></img></Link>

        <div className="nav-bar-links-container">
          {this.getLinkTag("/browse")}
          <Link to='#' className="nav-bar-link">Marvel</Link>
          <Link to='#' className="nav-bar-link">DC</Link>
          <Link to='#' className="nav-bar-link">My List</Link>
        </div>

        <div className="user-logo-container"
          onMouseEnter={() => this.setState({ showDropdown: true })}
          // onMouseLeave={() => this.setState({ showDropdown: false })}
        >
          <div
            className="dropdown-container"
            onMouseEnter={() => this.setState({ showDropdown: true })}
          >
            <img
              className="user-logo"
              src={window.userLogo}
            />
            <span></span>
          </div>
          { dropdown }
        </div>
      </div>
    );
  }

  userLoggedOut() {
    if (this.props.location.pathname === "/login") {
      return (
        <div className="nav-bar signed-out">
          <Link to="/"><img src={window.logo} className="logo"></img></Link>
          <button className="nav-bar-button" onClick={this.handleDemoLogin}>Demo Superflix!</button>
        </div>
      );
    } else {
      return (
        <div className="nav-bar signed-out">
          <Link to="/"><img src={window.logo} className="logo"></img></Link>
          <Link to="/login" className="login-link">
            <button className="nav-bar-button">Sign In</button>
          </Link>
        </div>
      );
    }
  };

  // if currentUser exists, render userLoggedIn(), otherwise userLoggedOut()
  render() {
    return this.props.currentUser ? this.userLoggedIn() : this.userLoggedOut();
  }
};