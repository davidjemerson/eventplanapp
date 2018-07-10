import React from 'react';
import Moment from 'react-moment';

const ModalInfo = props => (
  <div className="Modal">
    <h1 className="event-title">{props.event.name}</h1>
    <hr />
    <p className="cat-para"><span className="cat-title">Category:</span>{props.event.category}</p>
    <p className="date-para">
      {' '}
      <span className="date-title">When:</span>{' '}
      <Moment format="MMM DD, YYYY @ HH:mm">
        {props.event.scheduledDatetime}
      </Moment>
    </p>
    <p className="loc-para"><span className="loc-title">Location:</span>{props.event.location}</p>
    <p className="add-para"><span className="add-title">Address:</span>{props.event.address}</p>
    <p className="who-para"><span className="who-title">Who Going:</span>{props.event.attendees}</p>
  </div>
);

export default ModalInfo;
