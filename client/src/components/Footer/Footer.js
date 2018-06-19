//sets up the reusable Navbar component
import React, { Component } from 'react';
// import "./Navbar.css";

class Footer extends Component {
  render() {
    return (
      <footer className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                ABOUT <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                HOW IT WORKS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                INVITE
              </a>
            </li>
          </ul>
          <span className="copyright" href="#">
            COPYRIGHT 2018 - EVENTPLAN - DE - SR - LS
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
