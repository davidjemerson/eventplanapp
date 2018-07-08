import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Splash from './pages/Splash';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Create from './pages/Create';
import Friends from './pages/Friends';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: null,
    };
    this._logout = this._logout.bind(this);
    this._login = this._login.bind(this);
  }

  componentDidMount() {
		axios.get('/auth/user').then(response => {
			console.log(response.data)
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

  _logout(event) {
    event.preventDefault();
    axios.post('/auth/logout').then(response => {
      console.log(response.data);
      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          user: null,
        });
      }
    });
  }

  _login(username, password) {
    axios
      .post('/auth/login', {
        username,
        password,
      })
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          // update the state
          this.setState({
            loggedIn: true,
            user: response.data.user,
          });
        }
      });
  }

  render() {
    let splash
    let home
    let create
    let friends
    let signin

    if (this.state.loggedIn) {
      console.log("App rendering logged in");
      splash = <Route exact path="/" render={() => <Splash loggedIn={this.state.loggedIn} user={this.state.user} />}/>
      home = <Route exact path="/dashboard/home" render={() => <Home loggedIn={this.state.loggedIn} user={this.state.user} />}/>
      create = <Route exact path="/dashboard/create" render={() => <Create loggedIn={this.state.loggedIn} user={this.state.user} />}/>
      friends = <Route exact path="/dashboard/friends" render={() => <Friends loggedIn={this.state.loggedIn} user={this.state.user} />}/>
      signin = <Route exact path="/signin" render={() => <Signin loggedIn={this.state.loggedIn} user={this.state.user} _logout={this._logout} />}/>
    } else {
      console.log("App rendering logged out");
      splash = <Route exact path="/" component={Splash} />
      home = <Route exact path="/dashboard/home" component={Home} />
      create = <Route exact path="/dashboard/create" component={Create} />
      friends = <Route exact path="/dashboard/friends" component={Friends} />
      signin = <Route exact path="/signin" render={() => <Signin _login={this._login} _googleSignin={this._googleSignin} />}/>
    }
    return (
      <Router>
        <div>
          <Switch>
            {splash}
            {home}
            {create}
            {friends}
            {signin}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
