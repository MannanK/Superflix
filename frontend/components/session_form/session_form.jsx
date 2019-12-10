import React from 'react';

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
    const { formType, errors } = this.props;
    const { email, password } = this.state;

    let errorLis = errors.map((error, i) => {
      return <li key={i}>{error}</li>
    });

    return (
      <div className="session-form">
        <h1>{formType}</h1>

        <ul className="errors">
          {errorLis}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <label>Email:
            <input type="text" value={email} onChange={this.updateField("email")} />
          </label>

          <label>Password:
            <input type="password" value={password} onChange={this.updateField("password")} />
          </label>

          <button>{formType}</button>
        </form>
      </div>
    );
  }
}