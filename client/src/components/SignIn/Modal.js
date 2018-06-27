import React from 'react';
import SignInForm from './SignInForm';

const Modal = props => (
  <div className="Modal">
    <div className="container modal-bg">
      <div className="row">
        <div className="col left-side">
          <h1 className="signup-title">Welcome</h1>
          <p className="leftBy-line">Register for an EventPlan account today.</p>
          <form onSubmit={props.onSubmit} className="ModalForm">
            <SignInForm id="firstName" type="text" placeholder="First Name" />
            <SignInForm id="lastName" type="text" placeholder="Last Name" />
            <SignInForm
              id="username"
              type="email"
              placeholder="youremail@you.com"
            />
            <SignInForm id="password" type="password" placeholder="Password" />
            <button className="signup-btn">SIGN UP</button>
            <p className="signin-para">By signing up, you agree to our terms.</p>
          </form>
        </div>
        <div className="col right-side">
          <h1 className="signup-title">Or, Sign In</h1>
          <p className="rightBy-line">Your events are waiting!</p>
          <form onSubmit={props.onSubmit} className="rightForm">
            <SignInForm
              className="test"
              id="username"
              type="email"
              placeholder="youremail@you.com"
            />
            <SignInForm id="password" type="password" placeholder="password" />
            <button className="signin-btn">SIGN IN</button>
          </form>
          <span>
            <p className="goog-para">Or, Sign in with Google.</p>
          </span>
          <button className="goog-btn">Google +</button>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
