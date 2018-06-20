import React from 'react';

export const Modal = props => (
  <div className="Modal">
    <form onSubmit={this.props.onSubmit} className="ModalForm">
      <input id="name" type="text" placeholder="My Full Name" />
      <input id="name" type="email" placeholder="youremail@you.com" />
      <input id="password" type="password" placeholder="password" />
      <button>Log in</button>
    </form>
  </div>
);
