//sets up the reusable Navbar component
import React, { Component } from 'react';
// import "./Navbar.css";
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className='footer'>
          <div className='container text-container'>
            <span className='footer-byline'>
              THE BEST WAY TO PLAN
            </span>
            <span className='copyright'>
              COPYRIGHT 2018 - EVENTPLAN - DE - SR - LS
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
