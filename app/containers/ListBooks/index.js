/**
 *
 * ListBooks
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelector } from './selectors';
import reducer from './reducer';
import saga from './saga';
import ListBooks from './ListBooks';
import { mapDispatchToProps } from './ListBooks';

/* eslint-disable react/prefer-stateless-function */

export const mapStateToProps = createStructuredSelector({
  loading: makeSelector('loading'),
  error: makeSelector('error'),
  listCategory: makeSelector('listCategory'),
  listAuthor: makeSelector('listAuthor'),
  listPublisher: makeSelector('listPublisher'),
  listBook: makeSelector('listBook'),
  categoryFilter: makeSelector('categoryFilter'),
  publisherFilter: makeSelector('publisherFilter'),
  authorFilter: makeSelector('authorFilter'),
  sortType: makeSelector('sortType'),
  sortField: makeSelector('sortField'),
  page: makeSelector('page'),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'listBooks', reducer });
const withSaga = injectSaga({ key: 'listBooks', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ListBooks);
