//sets up the reusable Event Card component
import React, { Component } from 'react';
import "./EventCard.css";

class EventCard extends Component {
  render() {
    return (
      <div className="card text-white mb-3 event-card">
        <div className="card-header">BOWLING</div>
        <div className="card-body">
          <h5 className="card-month">JUNE</h5>
          <h6 className="card-day">29</h6>
          <p className="card-text">2 of 7 Friends Going</p>
        </div>
      </div>
    );
  }
}

export default EventCard;
