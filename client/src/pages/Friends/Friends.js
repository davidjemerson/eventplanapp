import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import FriendCard from '../../components/FriendCard';
import Footer from '../../components/Footer';

class Friends extends Component {
  state = {
    //TODO add some shit to state here 😎
  };

  render() {
    return (
      <div className="App Site">
        <div className="Site-Content">
          <Navbar />
          {/* <Sidebar /> */}
          <h1 className="container">FRIENDS</h1>
          <hr />
          {/* //TODO we'll have to map over our friends here */}
          <FriendCard />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Friends;
