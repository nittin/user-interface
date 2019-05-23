/**
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import BookBlock from '../../components/BookBlock/BookBlock';
import LeftFixBlock from '../../components/BookBlock/LeftFixBlock';
import Advertisement from '../../components/Advertisement/Advertisement';
import RightFixBlock from '../../components/BookBlock/RightFixBlock';
import * as actions from './actions';
import { makeSelector } from './selectors';

/* eslint-disable react/prefer-stateless-function */
export class Home extends React.Component {
  componentDidMount() {
    this.props.getNewBook();
  }

  render() {
    return (
      <div>
        <Advertisement />
        <BookBlock titleBlock="SÁCH MỚI VỀ" {...this.props} />
        <LeftFixBlock titleBlock="VĂN HỌC - NGHỆ THUẬT" />
        <RightFixBlock titleBlock="TRUYỆN - TIỂU THUYẾT" />
        <LeftFixBlock titleBlock="SÁCH MỚI XUẤT BẢN" />
        <RightFixBlock titleBlock="GIÁO TRÌNH" />
      </div>
    );
  }
}

Home.propTypes = {
  getNewBook: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  newBook: makeSelector('newBook'),
  loading: makeSelector('loading'),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getNewBook: () => dispatch(actions.getNewBook()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Home);
