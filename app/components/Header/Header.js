import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import banner from '../../images/banner.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header mb-3">
        <div className="header__link d-flex">
          <p className="ml-5">TRANG CHỦ</p>
          <p className="ml-5">THỂ LOẠI</p>
          <p className="ml-5">TÁC GIẢ</p>
          <p className="ml-5">NHÀ XUẤT BẢN</p>
          <p className="ml-5">CHÚNG TÔI</p>
        </div>
      </div>
    );
  }
}

Header.propTypes = {};
export default Header;
