import React, { Component } from 'react';
import NavbarDash from '../../components/NavbarDash';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import API from '../../utils/API';
// import CreateForm from '../../components/Create/CreateForm';
import { Input, FormBtn } from '../../components/Create';

import './Create.css';

class Create extends Component {
  state = {
    search: '',
    category: '',
    name: '',
    location: '',
    address: '',
    numRequired: '',
    attendees: [],
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


  // Add attendee to array db
  // addAttendee = newAttendee => {
  //   this.setState.push({ attendees: [...this.state.attendees, newAttendee]})
  // };

  //TODO: write handleInputChange function
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value 
    });
  };

  // TODO: write handleFormSubmit function
  // TODO: finish connecting the rest of the input fields from the create event form page
  handleFormSubmit = event => {
    event.preventDefault();

    //let newAttendee = this.state.attendees.attendeeSchema.attendee;
    // var newStateArray = this.state.attendees.slice(',');
    // newStateArray.push(this.state.attendees);
    // this.setState({attendees: newStateArray});

    let newArray = this.state.attendees.slice();
    let newPerson = [];
    newPerson.push(newArray);
      
      // let newAttendee = this.setState.push({ attendees: [...this.state.attendees, newAttendee]});

      API.createEvent({
        name: this.state.name,
        category: this.state.category,
        location: this.state.location,
        address: this.state.address,
        numRequired: this.state.numRequired,
        attendees: newPerson
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
              <div className="col-12 create-container">
                <h1 className="create-heading">CREATE YOUR EVENT!</h1>
                <hr />
                <form>
                <label className="event-type">Event Category</label>
                <Input
                  value={this.state.category}
                  onChange={this.handleInputChange}
                  name="category"
                  placeholder="What Type of Event?" id="event-type"
                />
                <label className="event-name">Event Name</label>
                <Input
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  name="name"
                  placeholder="Name Your Awesome Event" id="event-name"
                />

                <label className="event-date">Event Date</label>
                <Input
                  value={this.state.scheduledDatetime}
                  onChange={this.handleInputChange}
                  name="scheduledDatetime"
                  placeholder="When Is This Happening?" id="event-date"
                />

                <label className="event-location">Where's Your Event</label>
                <Input
                  value={this.state.location}
                  onChange={this.handleInputChange}
                  name="location"
                  placeholder="Where's This Going Down?" id="event-location"
                />
                <label className="event-address">Event Address</label>
                <Input
                  value={this.state.address}
                  onChange={this.handleInputChange}
                  name="address"
                  placeholder="Address of the Event" id="event-address"
                />
                <label className="friends-reqd">How Many People Do You Need?</label>
                <Input
                  value={this.state.numRequired}
                  onChange={this.handleInputChange}
                  name="numRequired"
                  placeholder="Enter Up To 10 People"
                  id="friends-reqd"
                />
                <label className="friends-reqd">Wanna Invite Some People?</label>
                <Input
                  value={this.state.attendees}
                  onChange={this.handleInputChange}
                  name="attendees"
                  id="add-friends"
                />
                <FormBtn
                  onClick={this.handleFormSubmit}
                >SUBMIT
                </FormBtn>
                </form>
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

// () => this.state.addAttendee()
