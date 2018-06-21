import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Splash from './pages/Splash';
import Home from './pages/Home';
import Signin from './pages/Signin';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/dashboard/home" component={Home} />
        <Route exact path="/signin" component={Signin} />
      </Switch>
    </div>
  </Router>
);

export default App;
