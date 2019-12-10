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
    // document.body.classList = "";
    // document.body.classList.add('splash-bg');

    return (
      <div className="splash-container">
        <span className="splash-bg"></span>
        <div className="splash">
          <h1 className="splash-header">All of Superflix.</h1>
          <h1 className="splash-header">Free forever.</h1>
          <div className="timeline"></div>
          <h2 className="splash-subtext">
            We'll never email you since you'll never have to pay.
          </h2>
          <h2 className="splash-subtext last">
            Never cancel and you still won't be charged.
          </h2>

          <button className="splash-demo-button" onClick={this.handleDemoLogin}>DEMO SUPERFLIX ></button>
        </div>
      </div>
    );
  }
}