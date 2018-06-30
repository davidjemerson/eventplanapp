//sets up the reusable Navbar component
import React, { Component } from 'react';

class NavbarDash extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navDash">
          <a className="navbar-brand" href="/">
            EVENTPLAN
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <span className="nav-byline">
                  
                </span>
              </li>
            </ul>
            <span className="user-name">
              Welcome, propname.
            </span>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              LOG OUT
            </button>
          </div>
      </nav>
    );
  }
}

export default NavbarDash;
