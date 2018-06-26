import React from 'react';

export const SplashLower = props => (
  <div className="container-fluid">
    <div className="row body-lower">
      <div className="col-6">
        <h1 className="lower-heading">PLAN YOUR EVENT</h1>
      </div>
      <div className="col-6">
        <form>
          <div className="form-row lower-input">
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
              <button type="submit" className="btn btn-outline mb-2 btn-lower">
                GET STARTED
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);
