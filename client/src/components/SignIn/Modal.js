import React from 'react';
import SignInForm from './SignInForm';

const Modal = props => (
  <div className="Modal">
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Sign In</h1>
          <form onSubmit={props.onSubmit} className="ModalForm">
            <SignInForm
              id="username"
              type="email"
              placeholder="youremail@you.com"
            />
            <SignInForm id="password" type="password" placeholder="password" />
            <button>Sign in</button>
          </form>
          <p>Forgot Password?</p>
          <span>
            <p>-- Or Sign in with Google --</p>
          </span>
          <button>Google +</button>
        </div>
        <div className="col">
          <h1>Sign Up</h1>
          <form onSubmit={props.onSubmit} className="ModalForm">
            <SignInForm id="firstName" type="text" placeholder="First Name" />
            <SignInForm id="lastName" type="text" placeholder="Last Name" />
            <SignInForm
              id="username"
              type="email"
              placeholder="youremail@you.com"
            />
            <SignInForm id="password" type="password" placeholder="password" />
            <button>Sign up</button>
            <p>By signing up, you agree to our terms</p>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
