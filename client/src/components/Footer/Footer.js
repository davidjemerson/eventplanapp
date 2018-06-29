//sets up the reusable Navbar component
import React, { Component } from 'react';
// import "./Navbar.css";
// import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="navbar navbar-expand-lg">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item footer-byline">
                  THE BEST WAY TO PLAN
              </li>
            </ul>
            <span className="copyright" href="#">
              COPYRIGHT 2018 - EVENTPLAN - DE - SR - LS
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
