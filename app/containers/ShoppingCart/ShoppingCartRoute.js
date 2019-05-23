import React from 'react';
import PropTypes from 'prop-types';
import { Switch as Router, Route } from 'react-router-dom';
import NotFoundPage from '../NotFoundPage/Loadable';
import ShoppingCart from './Loadable';

export default function ShoppingCartRoute({ match }) {
  console.log("HIHIHIHI");
  return (
    <Router>
      <Route exact path={`${match.url}/shopping`} component={NotFoundPage} />
      <Route exact path={`${match.url}/cart`} component={ShoppingCart} />
      <Route component={NotFoundPage} />
    </Router>
  );
}

