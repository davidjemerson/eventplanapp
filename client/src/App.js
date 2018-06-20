import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Splash from './pages/Splash';
import Home from './pages/Home';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/dashboard/home" component={Home} />
      </Switch>
    </div>
  </Router>
);

export default App;
