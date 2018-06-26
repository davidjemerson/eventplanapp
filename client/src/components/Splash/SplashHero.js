import React from 'react';

export const SplashHero = props => (
  <div className="jumbotron text-center jumbotron-fluid hero-img">
    <div className="container">
      <h1 className="display-4">PLAN YOUR EVENT TODAY</h1>
      <p className="lead">
        Plan, invite, vote and schedule your event today.
      </p>
      <form>
        <div className="form-row align-items-center input-style">
          <div className="col-auto">
            <label className="sr-only" for="inlineFormInput">
              Email
            </label>
            <input
              type="email"
              className="form-control mb-2"
              id="inlineFormInput"
              placeholder="Enter your email"
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-outline mb-2 hero-btn">
              GET STARTED
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
);
