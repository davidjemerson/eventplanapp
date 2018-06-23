import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Create.css';

class Create extends Component {
  state = {};

  render() {
    return (
      <div className="App Site">
        <div className="Site-Content">
          <Navbar />
        </div>
        <Footer />
      </div>
    );
  }
}
