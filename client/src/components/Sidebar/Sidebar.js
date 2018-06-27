//sets up the reusable Sidebar component
import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidenav">
        <a href="#"><i className="fas fa-home icon-home"></i>HOME</a><hr />
        <a href="#"><i className="fas fa-plus icon-plus"></i>CREATE</a><hr />
        <a href="#"><i className="fas fa-user-friends icon-friends"></i>FRIENDS</a><hr />
        <a href="#"><i className="far fa-calendar-alt icon-cal"></i>CALENDAR</a><hr />
      </div>
    );
  }
}

export default Sidebar;
