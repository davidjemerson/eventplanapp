import React, { Component } from 'react';
import Modal from '../../components/SignIn/Modal';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Signin.css';

class Signin extends Component {
  state = {
    mounted: false,
  };

  //TODO WRITE ALL THE FUNCTIONS TO HANDLE FORM SUBMIT HERE
  componentDidMount() {
    this.setState({ mounted: true });
  }

  handleSubmit(e) {
    this.setState({ mounted: false });
    e.preventDefault();
  }

  //TODO //////////////////////////////////////////////////

  render() {
    let child;

    if (this.state.mounted) {
      child = <Modal onSubmit={() => this.handleSubmit} />;
    }
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {child}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Signin;
