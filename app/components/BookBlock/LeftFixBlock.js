import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import testImage from 'images/testImage.jpg';
import Slider from 'react-slick';
import { importAll } from 'utils/importImages';
import { Link } from "react-router-dom";
import { KeyboardArrowRight } from "@material-ui/icons";
import './styles.scss';

const images = importAll(
  require.context('images', false, /\.(png|jpe?g|svg)$/),
);

class LeftFixBlock extends React.Component {
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
    return (
      <div className="book-block">
        <div className="book-block__header d-flex align-items-center pl-3">{this.props.titleBlock}</div>
        <div className="book-block__container d-flex pb-0">
          <div>
            <img src={images["fixBook.jpg"]} alt="testImage" />
          </div>
          <div className="book-block__container__slider pb-0">
            <Slider {...settings}>
              <div>
                <div className="book-item d-inline-flex">
                  <div className="book-block__container__slider--box">
                    <div className="badge-number d-flex align-items-center justify-content-center">5</div>
                    <img
                      className="book-block__container__slider__image-carousel "
                      src={testImage}
                      alt="testImage"
                    />
                  </div>
                  <div className="book-block__container__slider__info p-3">
                    <p>sdfgasdgasdfgfdgdádasdasdasdasdasdasdasdasdasdasdadgdfgdfgdfgdfgsdasdasdasdádasdasdads Duong</p>
                    <p className="price">169.000</p>
                  </div>
                </div>
                <div className="book-item d-inline-flex">
                  <div className="book-block__container__slider--box">
                    <div className="badge-number d-flex align-items-center justify-content-center">5</div>
                    <img
                      className="book-block__container__slider__image-carousel "
                      src={testImage}
                      alt="testImage"
                    />
                  </div>
                  <div className="book-block__container__slider__info p-3">
                    <p>sdfgasdgasdfgfdgdádasdasdasdasdasdasdasdasdasdasdadgdfgdfgdfgdfgsdasdasdasdádasdasdads Duong</p>
                    <p className="price">169.000</p>
                  </div>                </div>
              </div>
              <div>
                <div className="book-item d-inline-flex">
                  <div className="book-block__container__slider--box">
                    <div className="badge-number d-flex align-items-center justify-content-center">5</div>
                    <img
                      className="book-block__container__slider__image-carousel "
                      src={testImage}
                      alt="testImage"
                    />
                  </div>
                  <div className="book-block__container__slider__info p-3">
                    <p>sdfgasdgasdfgfdgdádasdasdasdasdasdasdasdasdasdasdadgdfgdfgdfgdfgsdasdasdasdádasdasdads Duong</p>
                    <p className="price">169.000</p>
                  </div>                </div>
                <div className="book-item d-inline-flex">
                  <div className="book-block__container__slider--box">
                    <div className="badge-number d-flex align-items-center justify-content-center">5</div>
                    <img
                      className="book-block__container__slider__image-carousel "
                      src={testImage}
                      alt="testImage"
                    />
                  </div>
                  <div className="book-block__container__slider__info p-3">
                    <p>sdfgasdgasdfgfdgdádasdasdasdasdasdasdasdasdasdasdadgdfgdfgdfgdfgsdasdasdasdádasdasdads Duong</p>
                    <p className="price">169.000</p>
                  </div>                </div>
              </div>
              <div>
                <div className="book-item d-inline-flex">
                  <div className="book-block__container__slider--box">
                    <div className="badge-number d-flex align-items-center justify-content-center">5</div>
                    <img
                      className="book-block__container__slider__image-carousel "
                      src={testImage}
                      alt="testImage"
                    />
                  </div>
                  <div className="book-block__container__slider__info p-3">
                    <p>sdfgasdgasdfgfdgdádasdasdasdasdasdasdasdasdasdasdadgdfgdfgdfgdfgsdasdasdasdádasdasdads Duong</p>
                    <p className="price">169.000</p>
                  </div>                </div>
                <div className="book-item d-inline-flex">
                  <div className="book-block__container__slider--box">
                    <div className="badge-number d-flex align-items-center justify-content-center">5</div>
                    <img
                      className="book-block__container__slider__image-carousel "
                      src={testImage}
                      alt="testImage"
                    />
                  </div>
                  <div className="book-block__container__slider__info p-3">
                    <p>sdfgasdgasdfgfdgdádasdasdasdasdasdasdasdasdasdasdadgdfgdfgdfgdfgsdasdasdasdádasdasdads Duong</p>
                    <p className="price">169.000</p>
                  </div>                </div>
              </div>
              <div>
                <div className="book-item d-inline-flex">
                  <div className="book-block__container__slider--box">
                    <div className="badge-number d-flex align-items-center justify-content-center">5</div>
                    <img
                      className="book-block__container__slider__image-carousel "
                      src={testImage}
                      alt="testImage"
                    />
                  </div>
                  <div className="book-block__container__slider__info p-3">
                    <p>sdfgasdgasdfgfdgdádasdasdasdasdasdasdasdasdasdasdadgdfgdfgdfgdfgsdasdasdasdádasdasdads Duong</p>
                    <p className="price">169.000</p>
                  </div>                </div>
                <div className="book-item d-inline-flex">
                  <div className="book-block__container__slider--box">
                    <div className="badge-number d-flex align-items-center justify-content-center">5</div>
                    <img
                      className="book-block__container__slider__image-carousel "
                      src={testImage}
                      alt="testImage"
                    />
                  </div>
                  <div className="book-block__container__slider__info p-3">
                    <p>sdfgasdgasdfgfdgdádasdasdasdasdasdasdasdasdasdasdadgdfgdfgdfgdfgsdasdasdasdádasdasdads Duong</p>
                    <p className="price">169.000</p>
                  </div>                </div>
              </div>
              <div>
                <div className="book-item d-inline-flex">
                  <div className="book-block__container__slider--box">
                    <div className="badge-number d-flex align-items-center justify-content-center">5</div>
                    <img
                      className="book-block__container__slider__image-carousel "
                      src={testImage}
                      alt="testImage"
                    />
                  </div>
                  <div className="book-block__container__slider__info p-3">
                    <p>sdfgasdgasdfgfdgdádasdasdasdasdasdasdasdasdasdasdadgdfgdfgdfgdfgsdasdasdasdádasdasdads Duong</p>
                    <p className="price">169.000</p>
                  </div>                </div>
                <div className="book-item d-inline-flex">
                  <div className="book-block__container__slider--box">
                    <div className="badge-number d-flex align-items-center justify-content-center">5</div>
                    <img
                      className="book-block__container__slider__image-carousel "
                      src={testImage}
                      alt="testImage"
                    />
                  </div>
                  <div className="book-block__container__slider__info p-3">
                    <p>sdfgasdgasdfgfdgdádasdasdasdasdasdasdasdasdasdasdadgdfgdfgdfgdfgsdasdasdasdádasdasdads Duong</p>
                    <p className="price">169.000</p>
                  </div>                </div>
              </div>
              <div>
                <div className="book-item d-inline-flex">
                  <div className="book-block__container__slider--box">
                    <div className="badge-number d-flex align-items-center justify-content-center">5</div>
                    <img
                      className="book-block__container__slider__image-carousel "
                      src={testImage}
                      alt="testImage"
                    />
                  </div>
                  <div className="book-block__container__slider__info p-3">
                    <p>sdfgasdgasdfgfdgdádasdasdasdasdasdasdasdasdasdasdadgdfgdfgdfgdfgsdasdasdasdádasdasdads Duong</p>
                    <p className="price">169.000</p>
                  </div>                </div>
                <div className="book-item d-inline-flex">
                  <div className="book-block__container__slider--box">
                    <div className="badge-number d-flex align-items-center justify-content-center">5</div>
                    <img
                      className="book-block__container__slider__image-carousel "
                      src={testImage}
                      alt="testImage"
                    />
                  </div>
                  <div className="book-block__container__slider__info p-3">
                    <p>sdfgasdgasdfgfdgdádasdasdasdasdasdasdasdasdasdasdadgdfgdfgdfgdfgsdasdasdasdádasdasdads Duong</p>
                    <p className="price">169.000</p>
                  </div>                </div>
              </div>
              <div>
                <div className="book-item d-inline-flex">
                  <div className="book-block__container__slider--box">
                    <div className="badge-number d-flex align-items-center justify-content-center">5</div>
                    <img
                      className="book-block__container__slider__image-carousel "
                      src={testImage}
                      alt="testImage"
                    />
                  </div>
                  <div className="book-block__container__slider__info p-3">
                    <p>sdfgasdgasdfgfdgdádasdasdasdasdasdasdasdasdasdasdadgdfgdfgdfgdfgsdasdasdasdádasdasdads Duong</p>
                    <p className="price">169.000</p>
                  </div>                </div>
                <div className="book-item d-inline-flex">
                  <div className="book-block__container__slider--box">
                    <div className="badge-number d-flex align-items-center justify-content-center">5</div>
                    <img
                      className="book-block__container__slider__image-carousel "
                      src={testImage}
                      alt="testImage"
                    />
                  </div>
                  <div className="book-block__container__slider__info p-3">
                    <p>sdfgasdgasdfgfdgdádasdasdasdasdasdasdasdasdasdasdadgdfgdfgdfgdfgsdasdasdasdádasdasdads Duong</p>
                    <p className="price">169.000</p>
                  </div>                </div>
              </div>
              <div>
                <div className="book-item d-inline-flex">
                  <div className="book-block__container__slider--box">
                    <div className="badge-number d-flex align-items-center justify-content-center">5</div>
                    <img
                      className="book-block__container__slider__image-carousel "
                      src={testImage}
                      alt="testImage"
                    />
                  </div>
                  <div className="book-block__container__slider__info p-3">
                    <p>sdfgasdgasdfgfdgdádasdasdasdasdasdasdasdasdasdasdadgdfgdfgdfgdfgsdasdasdasdádasdasdads Duong</p>
                    <p className="price">169.000</p>
                  </div>                </div>
                <div className="book-item d-inline-flex">
                  <div className="book-block__container__slider--box">
                    <div className="badge-number d-flex align-items-center justify-content-center">5</div>
                    <img
                      className="book-block__container__slider__image-carousel "
                      src={testImage}
                      alt="testImage"
                    />
                  </div>
                  <div className="book-block__container__slider__info p-3">
                    <p>sdfgasdgasdfgfdgdádasdasdasdasdasdasdasdasdasdasdadgdfgdfgdfgdfgsdasdasdasdádasdasdads Duong</p>
                    <p className="price">169.000</p>
                  </div>                </div>
              </div>
              <div>
                <div className="book-item d-inline-flex">
                  <div className="book-block__container__slider--box">
                    <div className="badge-number d-flex align-items-center justify-content-center">5</div>
                    <img
                      className="book-block__container__slider__image-carousel "
                      src={testImage}
                      alt="testImage"
                    />
                  </div>
                  <div className="book-block__container__slider__info p-3">
                    <p>sdfgasdgasdfgfdgdádasdasdasdasdasdasdasdasdasdasdadgdfgdfgdfgdfgsdasdasdasdádasdasdads Duong</p>
                    <p className="price">169.000</p>
                  </div>                </div>
                <div className="book-item d-inline-flex">
                  <div className="book-block__container__slider--box">
                    <div className="badge-number d-flex align-items-center justify-content-center">5</div>
                    <img
                      className="book-block__container__slider__image-carousel "
                      src={testImage}
                      alt="testImage"
                    />
                  </div>
                  <div className="book-block__container__slider__info p-3">
                    <p>sdfgasdgasdfgfdgdádasdasdasdasdasdasdasdasdasdasdadgdfgdfgdfgdfgsdasdasdasdádasdasdads Duong</p>
                    <p className="price">169.000</p>
                  </div>                </div>
              </div>
            </Slider>
          </div>
        </div>
        <Link to="/list-books">
          <p className="book-block__container__show-all d-flex flex-row-reverse pr-4 pb-4 pt-0">Xem tất cả <KeyboardArrowRight />
          </p>
        </Link>
      </div>
    );
  }
}

LeftFixBlock.propTypes = {
  titleBlock: PropTypes.string,
};
export default LeftFixBlock;
