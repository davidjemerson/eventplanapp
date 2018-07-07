import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import ModalInfo from '../../components/EventModal/Modal';
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
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  // when component mounts, load all events and save them to this.state.events
  componentDidMount() {
    this.loadEvents();
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

  render() {
    const { open } = this.state;
    return (
      <div>
        <NavbarDash />
        <div className="container-fluid">
          <div className="row">
            <div className="sidebar">
              <Sidebar />
            </div>
            <div className="col-sm-12 main-container">
              <h1 className="attend-heading">EVENTS CONFIRMED</h1>
              <hr />
              {/* //DONE --> map over only events that are ATTENDING here */}
              {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}
              {this.state.events.filter(event => event.confirmed).map(event => {
                return (
                  <div>
                    <EventCard
                      key={event._id}
                      id={event._id}
                      category={event.category}
                      date={event.scheduledDatetime}
                      modal={() => this.onOpenModal()}
                    />
                    <Modal open={open} onClose={this.onCloseModal} center>
                      <ModalInfo name={event.name} />
                    </Modal>
                  </div>
                );
              })}

              {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}
              <h1 className="pend-heading">EVENTS NOT CONFIRMED</h1>
              <hr />
              {/* //DONE --> map over only events that are ATTENDING here */}
              {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}
              {this.state.events
                .filter(event => !event.confirmed)
                .map(event => {
                  return (
                    <EventCard
                      key={event._id}
                      category={event.category}
                      date={event.scheduledDatetime}
                      //TODO - attendees confirmed
                      //TODO - attendees total
                    />
                  );
                })}
              {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}
              <h1 className="create-heading">EVENTS I'VE CREATED</h1>
              <hr />
              {this.state.events
                .filter(event => !event.confirmed)
                .map(event => {
                  return (
                    <EventCard
                      key={event._id}
                      category={event.category}
                      date={event.scheduledDatetime}
                      //TODO - attendees confirmed
                      //TODO - attendees total
                    />
                  );
                })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
