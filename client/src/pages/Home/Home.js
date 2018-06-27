import React, { Component } from 'react';
import Modal from '../../components/EventModal/Modal';
import NavbarDash from '../../components/NavbarDash';
import Sidebar from '../../components/Sidebar';
import EventCard from '../../components/EventCard';
import Footer from '../../components/Footer';
/* import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; */
import './Home.css';

class Home extends Component {
  state = {
    mounted: false
  };

  // when component mounts, change state
  componentDidMount() {
    this.setState({ mounted: true });
  }
  // when someone submits, set state back to false
  handleSubmit(e) {
    this.setState({ mounted: false });
    e.preventDefault();
  }

  render() {
    let child;

    if (this.state.mounted) {
      child = <Modal onSubmit={this.handleSubmit} />;
    }
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
            <EventCard />
            <h1 className="pend-heading">EVENTS PENDING</h1>
            <hr />
            <EventCard />
            <h1 className="create-heading">EVENTS CREATED</h1>
            <hr />
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

/* <ReactCSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {child}
      </ReactCSSTransitionGroup> */
