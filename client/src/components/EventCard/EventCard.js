//sets up the reusable Event Card component
import React from 'react';
import './EventCard.css';

const EventCard = props => (
  <div className="card text-white mb-3 event-card">
    <div className="card-header">{props.category}</div>
    <div className="card-body">
      <h5 className="card-month">{props.date}</h5>
      <h6 className="card-day">add the day as a prop</h6>
      <p className="card-text">2 of 7 Friends Going</p>
    </div>
  </div>
);

export default EventCard;
