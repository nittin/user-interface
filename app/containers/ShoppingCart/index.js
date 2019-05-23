/**
 *
 * ShoppingCart
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import makeSelectShoppingCart from './selectors';
import ShoppingCart, { mapDispatchToProps } from './ShoppingCart';

/* eslint-disable react/prefer-stateless-function */

const mapStateToProps = createStructuredSelector({
  shoppingCart: makeSelectShoppingCart(),
});
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'shoppingCart', reducer });
const withSaga = injectSaga({ key: 'shoppingCart', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ShoppingCart);
