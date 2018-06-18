import React from 'react';

const SplashHero = props => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">PLAN AN EVENT TODAY</h1>
      <p className="lead">
        Plan, invite, vote and schedule your event today. Whether you invite 5
        people or 100, EventPlan has got you covered!
      </p>
      <form>
        <div className="form-row align-items-center">
          <div className="col-auto">
            <label className="sr-only" for="inlineFormInput">
              Email
            </label>
            <input
              type="email"
              className="form-control mb-2"
              id="inlineFormInput"
              placeholder="Enter your email address"
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-2">
              Get Started
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default SplashHero;
