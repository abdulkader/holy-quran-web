import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './RatingStar.module.css';

const RatingStar = ({ rating, className }) => {
  return (
    <div
      className={cx(styles.ratingStarHolder, className)}
      style={{ '--rating': rating }}
    />
  );
};

RatingStar.defaultProps = {
  rating: 0,
  className: '',
};

RatingStar.propTypes = {
  rating: PropTypes.number,
  className: PropTypes.string,
};

export default RatingStar;
