import React from 'react';
import { Switch as Router, Route } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.scss';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeaderMain from '../../components/Header/HeaderMain';
import Home from '../Home/Loadable';
import ListBooks from '../ListBooks/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import ShoppingCartRoute from '../ShoppingCart/ShoppingCartRoute';
import Detail from '../Detail/Loadable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        <Header />
        <div className="app__body">
          <HeaderMain />
          <Router>
            <Route exact path="/" component={Home} />
            <Route path="/list-books/:options" component={ListBooks} />
            <Route path="/book/:id" component={Detail} />
            <Route path="/check-out" component={ShoppingCartRoute} />
            <Route component={NotFoundPage} />
          </Router>
          <Footer />
        </div>
      </div>
    );
  }
}
export default withCookies(App);
