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
          <button onClick={logout} className="dropdown-item logout">Sign out of Superflix</button>
        </div>
      </div>
    );
  }
}

// export default Dropdown;