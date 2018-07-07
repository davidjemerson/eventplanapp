import React, { Component } from 'react';
import NavbarDash from '../../components/NavbarDash';
import Sidebar from '../../components/Sidebar';
import FriendCard from '../../components/FriendCard';
import Footer from '../../components/Footer';
import API from '../../utils/API';
import './Friends.css';

class Friends extends Component {
  state = {
    friends: [],
    firstName: '',
    lastName: '',
    local: {
      email: ''
    }
  };

  componentDidMount() {
    this.loadFriends();
    console.log(this.state.friends);
  }

  loadFriends = () => {
    API.getAllUsers()
      .then(res => {
        this.setState({
          friends: res.data,
          firstName: '',
          lastName: '',
          local: {
            email: ''
          }
        })
      })
      .catch(err => console.log(err));
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
                {this.state.friends.map(friend => {
                  return (
                    <FriendCard 
                      friend={friend}
                    />
                  )
                })}
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
