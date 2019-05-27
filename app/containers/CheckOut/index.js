// /**
//  *
//  * CheckOut
//  *
//  */
//
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { compose } from 'redux';
//
// import injectSaga from 'utils/injectSaga';
// import injectReducer from 'utils/injectReducer';
// import { makeSelector } from './selectors';
// import reducer from './reducer';
// import saga from './saga';
// import CheckOutStep from './CheckOutStep';
// import * as actions from './actions';
// /* eslint-disable react/prefer-stateless-function */
//
// const mapStateToProps = createStructuredSelector({
//   loading: makeSelector('loading'),
//   listCity: makeSelector('listCity'),
//   listDistrict: makeSelector('listDistrict'),
//   listWard: makeSelector('listWard'),
// });
//
// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//     getListCity: () => dispatch(actions.getListCity()),
//     getListDistrict: () => dispatch(actions.getListDistrict()),
//     getListWard: () => dispatch(actions.getListWard()),
//     onChangeInput: (name, value) => dispatch(actions.onChangeInput(name, value)),
//   };
// }
//
// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// );
//
// const withReducer = injectReducer({ key: 'checkOut', reducer });
// const withSaga = injectSaga({ key: 'checkOut', saga });
//
// export default compose(
//   withReducer,
//   withSaga,
//   withConnect,
// )(CheckOutStep);
