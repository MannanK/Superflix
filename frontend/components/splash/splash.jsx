import React from 'react';
import { Link } from 'react-router-dom';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  handleDemoLogin(e) {
    e.preventDefault();

    // TODO: change demo user info later

    const demoUser = { email: "tommy@tommy.com", password: "hunter2" };
    this.props.login(demoUser);
  }

  render() {
    return (
      <div className="splash">
        <h1 className="splash-header">All of Superflix.</h1>
        <h1 className="splash-header">Free forever.</h1>
        <span className="timeline"></span>
        <h2 className="splash-subtext">
          We'll never email you since you'll never have to pay.
        </h2>
        <h2 className="splash-subtext">
          Never cancel and you still won't be charged.
        </h2>

        <button className="demo-login-splash" onClick={this.handleDemoLogin}>Demo Superflix!</button>

        <span>Already have an account? </span><Link to="/login" className="signin-link">Sign in.</Link>
      </div>
    );
  }
}