import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import SignInForm from './SignInForm';

class Modal extends Component {

  constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			redirectTo: null
		}
		// this.googleSignin = this.googleSignin.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		console.log('handleSubmit')
		this.props._login(this.state.email, this.state.password)
		this.setState({
			redirectTo: '/'
		})
	}

  render() {
    if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
    } 
    else {
      return (
        <div className="Modal">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Sign In</h1>
                <form className="ModalForm">
                <label htmlFor="username">Username: </label>
                  <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="password">Password: </label>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <button onClick={this.handleSubmit}>Sign In</button>
                </form>
                <p>Forgot Password?</p>
                <span>
                  <p>-- Or Sign in with Google --</p>
                </span>
                <a href="/auth/google">
                <button>Google +</button>
                </a>
              </div>
              <div className="col">
                <h1>Sign Up</h1>
                <form className="ModalForm">
                  <SignInForm id="firstName" type="text" placeholder="First Name" />
                  <SignInForm id="lastName" type="text" placeholder="Last Name" />
                  <SignInForm
                    id="username"
                    type="email"
                    placeholder="youremail@you.com"
                  />
                  <SignInForm id="password" type="password" placeholder="password" />
                  <button>Sign up</button>
                  <p>By signing up, you agree to our terms</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
};

export default Modal;
