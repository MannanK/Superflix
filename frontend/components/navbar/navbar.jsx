import React from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';
import Dropdown from './dropdown';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
      showSearchBar: false,
      query: ""
    };

    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

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

  handleInput(e) {
    let query = e.currentTarget.value;

    this.setState({
      query
    });

    if (query === "") {
      this.setState({ query: "" });
      this.props.history.push("/");
    } else {
      this.props.history.push({
        pathname: '/search',
        search: `?q=${query}`
      });
    }
  }

  userLoggedIn() {
    const { currentUser, logout, location } = this.props;
    
    if (location.pathname.startsWith("/watch")) return "";

    const { showDropdown, showSearchBar } = this.state;

    let dropdown = showDropdown ? (
      <Dropdown
        user={currentUser}
        hideDropdown={() => this.setState({ showDropdown: false })}
        logout={logout}
      />
    ) : "";

    let searchBarClass = showSearchBar ? "showing" : "not-showing";

    let searchBar = 
      <>
        <button className="search">
          <i className="fas fa-search"></i>
        </button>
        <input
          type="text"
          className={`search-input ${searchBarClass}`}
          placeholder="Titles, year"
          value={this.state.query}
          onChange={this.handleInput}
        />
      </>;

    return (
      <div className="nav-bar signed-in">
        <Link to="/" className="logo-link">
          <img src={window.logo} className="logo-small"></img>
        </Link>

        <div className="nav-bar-links-container">
          {this.getLinkTag("/browse")}
          <Link to='#' className="nav-bar-link">Marvel</Link>
          <Link to='#' className="nav-bar-link">DC</Link>
          <Link to='#' className="nav-bar-link">My List</Link>
        </div>

        <div className="search-bar-container"
          onFocus={() => this.setState({ showSearchBar: true })}
          onBlur={() => this.setState({ showSearchBar: false })}
        >
          { searchBar }
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