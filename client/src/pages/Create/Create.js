import React, { Component } from 'react';
import NavbarDash from '../../components/NavbarDash';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import CreatePage from '../../components/Create/CreatePage';
import './Create.css';
import CreateForm from '../../components/Create/CreateForm';

class Create extends Component {
  state = {
    search: '',
    eventType: [],
    name: '',
    location: '',
    address: '',
    friends: [],
    addFriend: '',
  };

  // When component mounts, get eventType and friends from API
  // componentDidMount() {
  //get the events we let them select from
  //TODO
  // API.getEventTypes()
  //   .then(res => this.setState({ eventType: res.data.message }))
  //   .catch(err => console.log(err));
  //get their pre-loaded friends
  //   API.getAllUsers()
  //     .then(res => this.setState({ friends: res.data.message }))
  //     .catch(err => console.log(err));
  // }

  //TODO: write handleInputChange function
  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  //TODO: write handleFormSubmit function

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
              <div className="col-12 create-container">
                <h1 className="create-heading">CREATE YOUR EVENT!</h1>
                <hr />
                <CreateForm />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Create;
