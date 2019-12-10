import React from 'react';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>In the {this.props.formType} form</div>
    );
  }
}