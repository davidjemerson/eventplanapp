import React, { Component } from 'react';
import Modal from '../../components/EventModal/Modal';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import EventCard from '../../components/EventCard';
import Footer from '../../components/Footer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Home extends Component {
  state = {
    mounted: false,
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
      <Navbar />
      <Sidebar />
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {child}
      </ReactCSSTransitionGroup>
      <EventCard />
      <Footer />
      </div>
    );
  }
}

export default Home;