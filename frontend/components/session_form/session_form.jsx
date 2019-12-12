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
      password_hover: false,
      email_blank: false,
      password_blank: false
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
    if (e.target.value.length === 0) {
      this.setState({
        user: {
          email: e.target.value,
          password: this.state.user.password
        },
        email_blank: true
      });
    } else {
      this.setState({
        user: {
          email: e.target.value,
          password: this.state.user.password
        },
        email_blank: false
      });
    }
  }

  updatePassword(e) {
    if (e.target.value.length < 6) {
      this.setState({
        user: {
          email: this.state.user.email,
          password: e.target.value
        },
        password_blank: true
      });
    } else {
      this.setState({
        user: {
          email: this.state.user.email,
          password: e.target.value
        },
        password_blank: false
      });
    }
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

    return () => {
      this.setState({
        [field]: !(this.state[field])
      });
    }
  }

  blurField(field) {
    let hoverVal = field === "email" ? "email_hover" : "password_hover";
    let blankVal = field === "email" ? "email_blank" : "password_blank";

    return (e) => {
      if (this.state.user[field] === "") {
        this.setState({
          [hoverVal]: !(this.state[hoverVal]),
          [blankVal]: true
        });
      } else if (field === "password" && this.state.user[field].length < 6) {
        this.setState({
          [hoverVal]: !(this.state[hoverVal]),
          [blankVal]: true
        });
      } else {
        this.setState({
          [hoverVal]: !(this.state[hoverVal]),
          [blankVal]: false
        });
      }
    }
  }

  render() {
    const { formType, errors } = this.props;
    const { user, email_hover, password_hover, email_blank, password_blank } = this.state;

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

    let emailError = email_blank ? <span className="error">Please enter a valid email.</span> : "";
    let passwordError = password_blank ? <span className="error">Your password must contain at least 6 characters.</span> : "";

    let signupEmailError = errors.email ? <span className="error">{ errors.email }</span> : "";
    let signupPasswordError = errors.password ? <span className="error">{ errors.password }</span> : "";

    let emailInputClass = email_blank ? "input error" : "input field";
    let passwordInputClass = password_blank ? "input error" : "input field";

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
              className={emailInputClass}
              value={user.email}
              onChange={this.updateEmail}
              onFocus={this.focusField("email_hover")}
              onBlur={this.blurField("email")}
            />
            { signupEmailError || emailError }

            <span className={passwordClasses}>Password</span>
            <input
              type="password"
              className={passwordInputClass}
              value={user.password}
              onChange={this.updatePassword}
              onFocus={this.focusField("password_hover")}
              onBlur={this.blurField("password")}
            />
            { signupPasswordError || passwordError }

            <button>{formType}</button>

            {signupLink}
          </form>
        </div>
      </div>
    );
  }
}