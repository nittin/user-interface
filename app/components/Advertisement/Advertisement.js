import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';

import banner1 from 'images/banner1.jpg';
import banner2 from 'images/banner2.jpg';
import banner3 from 'images/banner3.jpg';
import banner4 from 'images/banner4.jpg';
import banner5 from 'images/banner5.jpg';
import left from 'images/left-slide.jpg';

class Advertisement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderCarousel = () => {
    const banner = [banner1, banner2, banner3, banner4, banner5];
    const carouselItem = [];
    if (banner) {
      banner.forEach(item => {
        carouselItem.push(
          <Carousel.Item>
            <img className="d-block w-100" src={item} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>,
        );
      });
    }
    return carouselItem;
  };

  render() {
    const carouselItem = this.renderCarousel();
    return (
      <div className="d-flex">
        <div className="img-fade">
          <div className="img-left-slide">
            <a href="#">London</a>
          </div>
        </div>
        <Carousel>{carouselItem}</Carousel>
      </div>
    );
  }
}

Advertisement.propTypes = {};
export default Advertisement;
