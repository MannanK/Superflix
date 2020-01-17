import React from 'react';

export default class Dropdown extends React.Component {
  componentWillUnmount() {
    this.props.hideDropdown();
  }

  render() {
    const { user, hideDropdown, logout } = this.props;

    return (
      <div
        onMouseLeave={hideDropdown}
        onBlur={hideDropdown}
        className="nav-dropdown-container"
      >
        <span className="dropdown-tooltip"></span>
        <div className="dropdown">
          <p className="dropdown-item">Welcome, {user.email}!</p>
          <div className="border"></div>
          <a className="dropdown-item link" target="_blank" href="http://mannank.github.io/">Portfolio</a>
          <a className="dropdown-item link" target="_blank" href="http://github.com/mannank">GitHub</a>
          <a className="dropdown-item link" target="_blank" href="https://www.linkedin.com/in/mannank">LinkedIn</a>
          <button onClick={logout} className="dropdown-item logout">Sign out of Superflix</button>
        </div>
      </div>
    );
  }
}

// export default Dropdown;