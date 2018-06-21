import React from 'react';
import SignInForm from './SignInForm';

const Modal = props => (
  <div className="Modal">
    <form onSubmit={props.onSubmit} className="ModalForm">
      <SignInForm id="name" type="text" placeholder="My Full Name" />
      <SignInForm id="username" type="email" placeholder="youremail@you.com" />
      <SignInForm id="password" type="password" placeholder="password" />
      <button>Log in</button>
    </form>
  </div>
);

export default Modal;
