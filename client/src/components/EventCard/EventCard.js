//sets up the reusable Event Card component
import React from 'react';
import './EventCard.css';
import Moment from 'react-moment';

const EventCard = props => (
  <div className="card text-white mb-3 event-card">
    <div className="card-header">{props.category}</div>
    <div className="card-body">
      <h5 className="card-month">
        <Moment format="MMMM">{props.date}</Moment>
      </h5>
      <h6 className="card-day">
        <Moment format="D">{props.date}</Moment>
      </h6>
      <p className="card-text">2 of 7 Friends Going</p>
    </div>
  </div>
);

export default EventCard;
