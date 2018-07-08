//sets up the reusable Navbar component
import React, { Component } from 'react';

class NavbarDash extends Component {
  render() {
    let user
    if (this.props.loggedIn) {
      user = this.props.user.firstName
    } else {
      user = "No User"
    }
    return (
      <nav className="navbar navbar-expand-lg navDash">
          <a className="navbar-brand" href="/">
            EVENTPLAN
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <span className="nav-byline">
                  
                </span>
              </li>
            </ul>
            <span className="user-name">
              Welcome, {user}.
            </span>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              LOG OUT
            </button>
          </div>

          {/* Mobile nav for smaller screens */}
          <div className="mobile-nav">
            <a href="/"><i className="fas fa-sign-out-alt logout-icon"></i></a>
          </div>
      </nav>
    );
  }
}

export default NavbarDash;

/* <span className="user-name">
  Welcome, propname.
</span> */
