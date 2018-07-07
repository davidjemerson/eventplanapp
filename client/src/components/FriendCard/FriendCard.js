import React, { Component } from 'react';
import './FriendCard.css';

const FriendCard = props => (
  <div className="container friends-container">
    <div className="card friend-bg">
      <div className="card-header friend-name">{props.friend.firstName} {props.friend.lastName}</div>
      <div className="card-body friend-body-bg">
        <div className="container">
          <div className="row">
            <div className="col">
              <h5 className="email-title">Email Address:</h5>
              <h6 className="user-email">{props.friend.local.email}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default FriendCard;
