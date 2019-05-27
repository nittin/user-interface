import React from 'react';
import PropTypes from 'prop-types';
import { Switch as Router, Route, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withCookies } from 'react-cookie';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelector } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './styles.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeaderMain from '../../components/Header/HeaderMain';
import Home from '../Home/Loadable';
import ListBooks from '../ListBooks/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import ShoppingCart from '../ShoppingCart/Loadable';
import CheckOut from '../CheckOut/Loadable';
import Detail from '../Detail/Loadable';
import * as actions from './actions';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // const { cookies } = this.props;
    // cookies.set('books', {}, { path: '/' });
    // this.props.getAllAuthor();
    // this.props.getAllCategory();
    // this.props.getAllPublisher();
  }

  render() {
    // const responseFacebook = response => {
    //   console.log(response);
    // };

    // const responseGoogle = response => {
    //   console.log(response);
    // };
    return (
      <div className="app">
        {/* <FacebookLogin
          appId="301575610537502"
          fields="name,email,picture"
          callback={responseFacebook}
        /> */}
        {/* <br />
        <br /> */}
        <Header {...this.props} />
        <div className="app__body">
          <HeaderMain />
          <Router>
            <Route exact path="/" component={Home} />
            <Route path="/list-books/:options" component={ListBooks} />
            <Route
              path="/book/:id"
              render={props => (
                <Detail {...props} cookies={this.props.cookies} />
              )}
            />
            <Route
              path="/check-out/cart"
              render={props => (
                <ShoppingCart {...props} cookies={this.props.cookies} />
              )}
            />
            <Route
              path="/check-out/shopping"
              render={props => (
                <CheckOut {...props} cookies={this.props.cookies} />
              )}
            />
            <Route component={NotFoundPage} />
          </Router>
          <Footer />
        </div>
      </div>
    );
  }
}
App.propTypes = {
  cookies: PropTypes.any,
};
export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getAllCategory: () => dispatch(actions.getAllCategory()),
    getAllPublisher: () => dispatch(actions.getAllPublisher()),
    getAllAuthor: () => dispatch(actions.getAllAuthor()),
  };
}
const mapStateToProps = createStructuredSelector({
  loading: makeSelector('loading'),
  error: makeSelector('error'),
  listCategory: makeSelector('listCategory'),
  listAuthor: makeSelector('listAuthor'),
  listPublisher: makeSelector('listPublisher'),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'app', reducer });
const withSaga = injectSaga({ key: 'app', saga });
// const EnhancedComponent = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(App);
export default compose(
  // withReducer,
  withRouter,
  withConnect,
  withSaga,
  withCookies,
)(App);
