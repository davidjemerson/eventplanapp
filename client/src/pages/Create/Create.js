import React, { Component } from 'react';
import API from '../../utils/API';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import CreatePage from '../../components/Create/CreatePage';
import './Create.css';
import CreateForm from '../../components/Create/CreateForm';

class Create extends Component {
  state = {
    eventType: [],
    name: '',
    location: '',
    address: '',
    friends: [],
    addFriend: '',
  };

  // When component mounts, get eventType and friends from API
  componentDidMount() {
    //get the events we let them select from
    API.getEventTypes()
      .then(res => this.setState({ eventType: res.data.message }))
      .catch(err => console.log(err));
    //get their pre-loaded friends
    API.getFriends()
      .then(res => this.setState({ friends: res.data.message }))
      .catch(err => console.log(err));
  }

  //TODO: write handleInputChange function

  //TODO: write handleFormSubmit function

  render() {
    return (
      <div className="App Site">
        <h1>CREATE YOUR EVENT!</h1>
        <hr />
        <div className="Site-Content">
          <Navbar />
          <Sidebar />
          <CreateForm />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Create;
