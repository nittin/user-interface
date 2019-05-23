import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { KeyboardArrowRight } from '@material-ui/icons';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.scss';

class BookBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
    };
    const { newBook } = this.props;
    const box = [];
    if (newBook && newBook.content.length > 0) {
      newBook.content.forEach(item => {
        box.push(
          <div>
            <div className="book-block__container__box">
              <Link to={`/book/${item.id}`}>
                <div className="img-container">
                  {this.props.loading.newBook ? (
                    <CircularProgress className="process" />
                  ) : (
                      ''
                    )}
                  <img
                    className="book-block__container__box__image-carousel img-fluid"
                    src={item.linkImage}
                    alt="testImage"
                  />
                </div>
                <p className="book-block__container__box__info">{item.name}</p>
                <p className="book-block__container__box__price">
                  {item.price.toLocaleString('vi-vn')}
                </p>
              </Link>
            </div>
          </div>,
        );
      });
    }
    return (
      <div className="book-block">
        <div className="book-block__header d-flex align-items-center pl-3">
          {this.props.titleBlock}
        </div>
        <div className="book-block__container">
          <Slider {...settings} className="one-row-slider">
            {box}
          </Slider>
          <Link to="/list-books/bookNew">
            <p className="book-block__container__show-all d-flex flex-row-reverse">
              Xem tất cả
              <KeyboardArrowRight />
            </p>
          </Link>
        </div>
      </div>
    );
  }
}

BookBlock.propTypes = {
  titleBlock: PropTypes.string,
  loading: PropTypes.object,
};
export default BookBlock;
