import React from 'react';
import { Link } from 'react-router-dom';

// const NavBar = ({currentUser, logout}) => (
//   // if currentUser exists, render this
//   currentUser ?
//   (
//     // logout button will be replaced with a modal that has a logout link inside
//     <div className="nav-bar signed-in">
//       <p>Welcome, {currentUser.email}!</p>
//       <button onClick={logout}>Logout</button>
//     </div>
//   ) : 
//   //otherwise, render this
//   (
//     <div className="nav-bar signed-out">
//         <Link to="/login" className="login-link">Sign In</Link>
//     </div>
//   )
// );

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, logout } = this.props;

    // use this.props.match.path here to decide if you want to show sign in on the page we're currently on

    return (
      // if currentUser exists, render this
      currentUser ?
        (
          // logout button will be replaced with a modal that has a logout link inside
          <div className="nav-bar signed-in">
            <p>Welcome, {currentUser.email}!</p>
            <button onClick={logout}>Logout</button>
          </div>
        ) :
        //otherwise, render this
        (
          <div className="nav-bar signed-out">
            <Link to="/login" className="login-link">Sign In</Link>
          </div>
        )
    );
  }
}

export default NavBar;