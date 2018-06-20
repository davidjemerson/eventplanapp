//sets up the reusable Event Card component
import React, { Component } from 'react';
import "./EventCard.css";

class EventCard extends Component {
  render() {
    return (
      <div class="card text-white bg-success mb-3 event-card">
        <div class="card-header">BOWLING</div>
        <div class="card-body">
          <h5 class="card-title">JUNE 29</h5>
          <p class="card-text">2 of 7 Friends Going</p>
        </div>
      </div>
    );
  }
}

export default EventCard;
