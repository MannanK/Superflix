import React from 'react';
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "",
        password: ""
      },
      email_hover: false,
      password_hover: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  componentWillUnmount() {
    this.props.deleteSessionErrors();
  }

  updateEmail(e) {
    this.setState({
      user: {
        email: e.target.value,
        password: this.state.user.password
      }
    });
  }

  updatePassword(e) {
    this.setState({
      user: {
        email: this.state.user.email,
        password: e.target.value
      }
    });
  }

  clearForm() {
    this.setState({
      user: {
        email: "",
        password: ""
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state.user);
    // TODO: remove clearForm?
    // this.clearForm();
    this.props.processForm(user);
  }

  focusField(field) {
    let value;

    if (field === "email_hover") {
      value = this.state.email_hover;
    } else {
      value = this.state.password_hover;
    }

    return () => {
      this.setState({
        [field]: !value
      });
    }
  }

  render() {
    const { formType, errors } = this.props;
    const { user, email_hover, password_hover } = this.state;

    // let errorLis = errors.map((error, i) => {
    //   return <li key={i}>{error}</li>
    // });

    let signupLink = formType === "Sign In" ? (
      <div className="signup-link">
        <span>New to Superflix? </span><Link to="/signup">Sign up now.</Link>
      </div>
    ) : ""

    let invalidCredentials = errors.user ? (
      <div className="invalid-credentials-error">
        {errors.user}
      </div>
    ) : ""

    let emailClasses = email_hover ? "email-placeholder focused" : "email-placeholder";
    if (user.email.length > 0) emailClasses += " non-active";

    let passwordClasses = password_hover ? "password-placeholder focused" : "password-placeholder";
    if (user.password.length > 0) passwordClasses += " non-active";

    return (
      <div className="session-form-container">
        <span className="session-form-bg"></span>
        <div className="session-form-div">
          <form className="session-form" onSubmit={this.handleSubmit}>
            <h1>{formType}</h1>

            { invalidCredentials }

            <span className={emailClasses}>Email</span>
            <input
              type="text"
              value={user.email}
              onChange={this.updateEmail}
              onFocus={this.focusField("email_hover")}
              onBlur={this.focusField("email_hover")}
            />

            {errors.email}

            <span className={passwordClasses}>Password</span>
            <input
              type="password"
              value={user.password}
              onChange={this.updatePassword}
              onFocus={this.focusField("password_hover")}
              onBlur={this.focusField("password_hover")}
            />

            { errors.password }

            <button>{formType}</button>

            {signupLink}
          </form>
        </div>
      </div>
    );
  }
}