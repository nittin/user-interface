import React from 'react';
import PropTypes from 'prop-types';
import { Switch as Router, Route } from 'react-router-dom';
import CheckOut from '../CheckOut/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import ShoppingCart from './Loadable';

export default function ShoppingCartRoute({ match }) {
  return (
    <Router>
      <Route exact path={`${match.url}/shopping`} component={CheckOut} />
      <Route exact path={`${match.url}/cart`} component={ShoppingCart} />
      <Route component={NotFoundPage} />
    </Router>
  );
}
