import React from 'react';

export const SplashLower = props => (
  <div className="container-fluid mt-5 mb-5">
    <div className="row justify-content-center">
      <div className="col-4">
        <h1>PLAN AN EVENT TODAY</h1>
      </div>
      <div className="col-4">
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
  </div>
);
