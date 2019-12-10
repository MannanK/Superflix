import React from 'react';
import { Link } from 'react-router-dom';

export default class Splash extends React.Component {
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
      </div>

      // show link at the bottom of div to tell user "try a demo!"
    );
  }
}