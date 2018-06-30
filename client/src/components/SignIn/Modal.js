import React, { Component } from 'react'
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

class Modal extends Component {
  
  render() {
    return(
      <div className="Modal">
        <div className="container modal-bg">
          <div className="row">
            <SignUpForm />
            <SignInForm />
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;
