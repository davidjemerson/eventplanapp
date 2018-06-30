import React, { Component } from 'react';
import './FriendCard.css';

const FriendCard = props => (
  <div className="container friend-container">
    <div className="card friend-bg">
      <div className="card-header friend-name">Props friends name here</div>
      <div className="card-body friend-body-bg">
        <div className="container">
          <div className="row">
            <div className="col">
              <h5 className="email-title">Email Address:</h5>
              <h6 className="user-email">email12345@you.com</h6>
              <h5 className="event-title">Events You've Joined:</h5>
              <h6 className="user-events">Your events go here</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default FriendCard;
