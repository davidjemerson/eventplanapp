//sets up the reusable Sidebar component
import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidenav">
        <a href="#">HOME</a>
        <a href="#">CREATE EVENT</a>
        <a href="#">FRIENDS</a>
        <a href="#">CALENDAR</a>
      </div>
    );
  }
}

export default Sidebar;
