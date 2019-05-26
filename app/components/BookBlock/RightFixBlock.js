import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import testImage from 'images/testImage.jpg';
import Slider from 'react-slick';

import './styles.scss';
import { KeyboardArrowRight } from "@material-ui/icons";
import { Link } from "react-router-dom";

function importAll(r) {
  const images = {};
  r.keys().map(item => {
    images[item.replace('./', '')] = r(item);
    return true;
  });
  return images;
}

const images = importAll(
  require.context('images', false, /\.(png|jpe?g|svg)$/),
);

class RightFixBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
    const bookItem = [];
    const bookRow = [];
    if (this.props.data && this.props.data.content.length > 0) {
      this.props.data.content.forEach((item) => {
        bookItem.push(
          <Link to={`/book/${item.id}`}>
            <div className="book-item d-inline-flex">
              <div className="book-block__container__slider--box">
                <img
                  className="book-block__container__slider__image-carousel "
                  src={item.linkImage}
                  alt="testImage"
                />
              </div>
              <div className="book-block__container__slider__info p-3">
                <p>{item.name}</p>
                <p className="price">{item.price}</p>
              </div>
            </div>
          </Link>
        )
      });
      if (bookItem.length > 0) {
        for (let i = 0; i < bookItem.length; i += 1) {
          if (bookItem[i + 1]) {
            bookRow.push(
              <div>
                {bookItem[i]}
                {bookItem[i + 1]}
              </div>
            )
            i += 1;
          } else {
            bookRow.push(
              <div>
                {bookItem[i]}
              </div>
            )
          }
        }
      }
    }
    return (
      <div className="book-block">
        <div className="book-block__header d-flex align-items-center pl-3">{this.props.titleBlock}</div>
        <div className="book-block__container d-flex">
          <div className="book-block__container__slider  pb-0">
            <Slider {...settings}>
              {bookRow}
            </Slider>
          </div>
          <div>
            <img src={images["fixBook.jpg"]} alt="testImage" />
          </div>
        </div>
        <Link to="/list-books">
          <p className="book-block__container__show-all d-flex pl-4 pb-4 pt-0">Xem tất cả <KeyboardArrowRight />
          </p>
        </Link>
      </div>
    );
  }
}

RightFixBlock.propTypes = {
  titleBlock: PropTypes.string,
};
export default RightFixBlock;
