import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Splash from './pages/Splash';
import Home from './pages/Home';
import Signin from './pages/Signin';

class App extends Component {
  
  constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: null
		}
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
	}

  _logout(event) {
		event.preventDefault()
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_login(email, password) {
		axios
			.post('/auth/login', {
				email,
				password
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
				}
			})
  }
  
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Splash} />
            <Route exact path="/dashboard/home" component={Home} />
            <Route exact path="/signin" component={Signin} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
