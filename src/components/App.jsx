import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Shop from '../pages/Shop';
import Home from '../pages/Home';
import Product from '../pages/Product';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/products/:id" component={Product} />
      </Switch>
    </Router>
  );
}
