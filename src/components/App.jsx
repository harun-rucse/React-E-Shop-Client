import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Shop from '../pages/Shop';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Cart from '../pages/Cart';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/products/:id" component={Product} />
      </Switch>
    </Router>
  );
}
