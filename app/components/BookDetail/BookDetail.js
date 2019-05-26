import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import testImage from 'images/testImage.jpg';
import Quantity from 'components/Common/Quantity';
import { ShoppingCart } from '@material-ui/icons';

import './styles.scss';

class BookDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = () => {
    const { cookies } = this.props;
    cookies.set('books','fffff', { path: '/' });
    console.log(cookies.get('books'));
  };

  render() {
    const { bookDetail, loading } = this.props;
    return (
      <div className="book-detail d-flex">
        <div className="book-detail__image-container p-5">
          <img src={bookDetail && bookDetail.linkImage} alt="" />
        </div>
        <div className="book-detail__info-container p-5">
          <h3>{bookDetail && bookDetail.name}</h3>
          <div className="d-flex align-items-center">
            Tác giả: ABC
          </div>
          <div className="d-flex align-items-center">
            Nhà xuất bản: {bookDetail && bookDetail.publisherName}
          </div>
          <div className="d-flex align-items-center">
            Giá:
            <h3 className="price ml-2">
              {bookDetail && bookDetail.price.toLocaleString('vi-vn')}
            </h3>
          </div>
          <div className="separator" />
          <div className="action">
            <p>Số lượng:</p>
            <Quantity className="quantity" />
            <Button className="btn ml-5" onClick={this.handleSubmit}>
              <ShoppingCart className="mr-2" />
              Chọn mua
            </Button>
          </div>
          <div className="separator" />
          <div className="description">
            {bookDetail && bookDetail.description}
          </div>
        </div>
      </div>
    );
  }
}
BookDetail.propTypes = {
  bookDetail: PropTypes.object,
  loading: PropTypes.bool,
  cookies: PropTypes.object,
};
export default BookDetail;
