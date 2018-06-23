import React from 'react';
import EventInfo from './EventInfo';

const Modal = props => (
  <div className="Modal">
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Sign In</h1>
          <form onSubmit={props.onSubmit} className="ModalForm">

            <EventInfo />
          
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
