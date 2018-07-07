import React from 'react';

const ModalInfo = props => (
  <div className="Modal">
    <h1>{props.event.name}</h1>
    <hr />
    {props.event.category}
    {props.event.scheduledDatetime}
  </div>
);

export default ModalInfo;
