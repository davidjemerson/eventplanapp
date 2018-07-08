import React from 'react';
import Moment from 'react-moment';

const ModalInfo = props => (
  <div className="Modal">
    <h1>{props.event.name}</h1>
    <hr />
    <p>Category: {props.event.category}</p>
    <p>
      {' '}
      When:{' '}
      <Moment format="MMM DD, YYYY @ HH:mm">
        {props.event.scheduledDatetime}
      </Moment>
    </p>
    <p>Location: {props.event.location}</p>
    <p>Address: {props.event.address}</p>
    <p>Who Going: {props.event.attendees}</p>
  </div>
);

export default ModalInfo;
