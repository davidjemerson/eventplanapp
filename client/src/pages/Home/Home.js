import React, { Component } from 'react';
import Modal from '../../components/EventModal/Modal';
import NavbarDash from '../../components/NavbarDash';
import Sidebar from '../../components/Sidebar';
import EventCard from '../../components/EventCard';
import Footer from '../../components/Footer';
import './Home.css';
import API from '../../utils/API';

class Home extends Component {
  state = {
    // set the initial state based on the event model
    events: [],
    name: '',
    category: '',
    organizer: '',
    attendees: [],
    numAttendeesConfirmed: 0,
    eventDate: '',
    confirmed: false,

    // ------------------------------------------------
    //! this is for the modal
    //? mounted: false
    // ------------------------------------------------
  };

  // when component mounts, load all events and save them to this.state.events
  componentDidMount() {
    this.loadEvents();
    // ------------------------------------------------
    //! this is for the modal
    //? this.setState({ mounted: true });
    // ------------------------------------------------
  }

  // load all the events and set them to this.state.events
  loadEvents = () => {
    API.getAllEvents()
      .then(res =>
        this.setState({
          events: res.data,
          name: '',
          category: '',
          organizer: '',
          attendees: [],
          numAttendeesConfirmed: 0,
          eventDate: '',
          confirmed: false,
        })
      )
      .catch(err => console.log(err));
  };

  // ------------------------------------------------
  //! this is for the modal
  // when someone submits, set state back to false
  /* handleSubmit(e) {
    this.setState({ mounted: false });
    e.preventDefault();
  } */
  // ------------------------------------------------

  render() {
    let child;

    // ------------------------------------------------
    //! this for modal
    /* if (this.state.mounted) {
      child = <Modal onSubmit={this.handleSubmit} />;
    } */
    // ------------------------------------------------

    return (
      <div>
        <NavbarDash />
        <div className="container-fluid">
          <div className="row">
            <div className="sidebar">
              <Sidebar />
            </div>
            <div className="col-sm-12 main-container">
              <h1 className="attend-heading">EVENTS ATTENDING</h1>
              <hr />
              {/* //TODO --> map over only events that are ATTENDING here */}
              {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}
              {this.state.events.map(event => {
                return (
                  <EventCard
                    key={event._id}
                    category={event.category}
                    date={event.date}
                    //TODO - attendees confirmed
                    //TODO - attendees total
                  />
                );
              })}
              {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}
              <h1 className="pend-heading">EVENTS PENDING</h1>
              <hr />
              {/* //TODO --> map over only events that are PENDING here */}
              <EventCard />
              <h1 className="create-heading">EVENTS CREATED</h1>
              <hr />
              {/* //TODO --> map over only events that are CREATED here */}
              <EventCard />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
