import React, { Component } from 'react';
import './FriendCard.css';

const FriendCard = props => (
  <div className="container">
    <div className="card mb-5">
      <div className="card-header bg-primary">Props friends name here</div>
      <div className="card-body">
        <div className="container">
          <div className="row">
            <div className="col">
              <h5 className="card-text">Props friends pic here</h5>
            </div>
            <div className="col">
              <h5 className="card-title">Props friends stuff here</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default FriendCard;
