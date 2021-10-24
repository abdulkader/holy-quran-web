import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...props.settings,
  };
  return <Slider {...settings}>{props.children}</Slider>;
};

Carousel.defaultProps = {
  settings: {},
};
Carousel.propTypes = {
  settings: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default Carousel;
