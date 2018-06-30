import React, { Component } from 'react';
import NavbarDash from '../../components/NavbarDash';
import Sidebar from '../../components/Sidebar';
import FriendCard from '../../components/FriendCard';
import Footer from '../../components/Footer';
import './Friends.css';

class Friends extends Component {
  state = {
    //TODO add some shit to state here 😎
  };

  render() {
    return (
      <div className="App Site">
        <div className="Site-Content">
          <NavbarDash />
          <div className="container-fluid">
            <div className="row">
              <div className="sidebar">
                <Sidebar />
              </div>
              <div className="col-12 friend-container">
                <h1 className="friend-heading">FRIENDS</h1>
                <hr />
                {/* //TODO we'll have to map over our friends here */}
                <FriendCard />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Friends;
