import React from 'react';
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  componentWillUnmount() {
    this.props.deleteSessionErrors();
  }

  updateField(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  clearForm() {
    this.setState({
      email: "",
      password: ""
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    // TODO: remove clearForm?
    // this.clearForm();
    this.props.processForm(user);
  }

  render() {
    // document.body.classList = "";
    // document.body.classList.add('session-bg');

    const { formType, errors } = this.props;
    const { email, password } = this.state;

    let errorLis = errors.map((error, i) => {
      return <li key={i}>{error}</li>
    });

    let signupLink = formType === "Sign In" ? (
      <div className="signup-link">
        <span>New to Superflix? </span><Link to="/signup">Sign up now.</Link>
      </div>
    ) : ""

    return (
      <div className="session-form-container">
        <span className="session-form-bg"></span>
        <div className="session-form-div">
          <form className="session-form" onSubmit={this.handleSubmit}>
            <h1>{formType}</h1>

            <ul className="errors">
              {errorLis}
            </ul>

            <input
              type="text"
              value={email}
              onChange={this.updateField("email")}
              placeholder="Email"  
            />

            <input
              type="password"
              value={password}
              onChange={this.updateField("password")}
              placeholder="Password"
            />

            <button>{formType}</button>

            {signupLink}
          </form>
        </div>
      </div>
    );
  }
}