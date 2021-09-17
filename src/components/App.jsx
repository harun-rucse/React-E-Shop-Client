import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Shop from '../pages/Shop';
import Home from '../pages/Home';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </Router>
  );
}
