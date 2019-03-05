import React, { Component } from 'react';
import NavbarDash from '../../components/NavbarDash';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import API from '../../utils/API';
import { Redirect } from 'react-router-dom';
import { Input, FormBtn } from '../../components/Create';
import SelectDates from '../../components/Create/SelectDates';

import './Create.css';

class Create extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      location: '',
      address: '',
      attendees: [''],
      potentialDates: [''],
      numPotential: 1,
      numInvites: 1,
      defaultSchedule: '',
      redirectTo: null
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  // TODO: write handleFormSubmit function
  // TODO: finish connecting the rest of the input fields from the create event form page
  handleFormSubmit = event => {
    console.log('user id: ' + this.props.user._id);
    event.preventDefault();
      API.createEvent({
        name: this.state.name,
        location: this.state.location,
        address: this.state.address,
        attendees: this.state.attendees,
        potentialDates: this.state.potentialDates,
        defaultSchedule: this.state.defaultSchedule,
        organizer: this.props.user._id
      })
      .catch(err => console.log(err));
    this.setState({
      redirectTo: '/dashboard/home'
    })
  };

  renderDateSelects() {
    const dateSelects = [];
    for (let i = 0; i < this.state.numPotential; i++) {
      dateSelects.push(<SelectDates key={i} name={'dateSelect-' + i}/>);
    };
    return dateSelects;
  }

  getDate() {
    let thisDate = this.state.month + '-' + this.state.day + '-' + this.state.year;
    console.log(thisDate);
  }

  renderInvitees() {
    const invitees = [];
    for (let i = 0; i < this.state.attendees.length; i++) {
      invitees.push(<Input placeholder='email address' key={i} name={'invitee-' + i} />);
    };
    return invitees;
  }

  addInvites = event => {
    event.preventDefault();
    this.setState((prevState) => ({
      attendees: [...prevState.attendees, ''],
    }));
  }

  addDates = event => {
    event.preventDefault();
    this.setState({
      numPotential: this.state.numPotential + 1
    });
    console.log("Date stuff:" + this._SelectDates);
  }

  render() {
    if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
    let navbar
    if (this.props.loggedIn) {
      console.log("rendering the logged in dash");
      navbar = <NavbarDash updateUser={this.props.updateUser} loggedIn={this.props.loggedIn} user={this.props.user} />
    } else {
      console.log("rendering the not logged in dash");
      navbar = <NavbarDash />
    }
    return (
      <div className="App Site">
        <div className="Site-Content">
          {navbar}
          <div className="container-fluid">
            <div className="row">
              <div className="sidebar">
                <Sidebar />
              </div>
              <div className="col-12 create-container">
                <h1 className="created-heading">CREATE YOUR EVENT!</h1>
                <hr />
                <form>
                <label className="event-name">Event Name</label>
                <Input
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  name="name"
                  placeholder="Name Your Awesome Event" id="event-name"
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
                <label className="friends-reqd">Wanna Invite Some People?</label>
                <div id="inviteEmails">
                  {this.renderInvitees()}
                  <FormBtn onClick={this.addInvites}>Add Invitee</FormBtn>
                </div>
                <label className="event-date">Pick Some Dates and Times</label>
                <div id="datesAndTimes">
                  {this.renderDateSelects()}
                  <FormBtn onClick={this.addDates}>Add Date</FormBtn>
                </div>
                <label className="default-schedule">When do you need to hear back from everyone?{this.state.defaultSchedule}</label>
                  <SelectDates
                    name="defaultSchedule"
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