/**
 *
 * Detail
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDetail from './selectors';
import { makeSelector } from './selectors';
import reducer from './reducer';
import saga from './saga';
import BookDetail from '../../components/BookDetail/BookDetail';
import * as actions from './actions';
/* eslint-disable react/prefer-stateless-function */
export class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.setBookId(this.props.match.params.id);
      setTimeout(() => {
        this.props.getBookById();
      });
    }
  }

  render() {
    const { bookDetail, loading, error } = this.props;
    return (
      <div>
        <BookDetail {...this.props} />
      </div>
    );
  }
}

Detail.propTypes = {
  match: PropTypes.any,
  setBookId: PropTypes.func,
  getBookById: PropTypes.func,
  bookDetail: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  detail: makeSelectDetail(),
  bookDetail: makeSelector('bookDetail'),
  loading: makeSelector('loading'),
  error: makeSelector('error'),
  bookId: makeSelector('bookId'),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setBookId: id => dispatch(actions.setBookId(id)),
    getBookById: () => dispatch(actions.getBookById()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'detail', reducer });
const withSaga = injectSaga({ key: 'detail', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Detail);
