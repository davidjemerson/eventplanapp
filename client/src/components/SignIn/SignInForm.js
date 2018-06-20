import React from 'react';

export const SignInForm = props => (
  <div className="Input">
    <input
      id={this.props.name}
      autoComplete="false"
      required
      type={this.props.type}
      placeholder={this.props.placeholder}
    />
    <label for={this.props.name} />
  </div>
);
