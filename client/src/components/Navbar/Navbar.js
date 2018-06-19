//sets up the reusable Navbar component
import React, { Component } from 'react';
// import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          EVENTPLAN
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                ABOUT <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                HOW IT WORKS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                INVITE
              </a>
            </li>
          </ul>
          <a class="nav-link" href="#">
            SIGN IN
          </a>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Get Started
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
