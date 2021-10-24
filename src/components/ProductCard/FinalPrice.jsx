import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const FinalPrice = ({ price }) => {
  const { regularPrice, specialPrice } = price;
  if (specialPrice) {
    return (
      <div className={cx('p-2 flex flex-nowrap items-center')}>
        <span className="text-lg text-primary-600 font-bold">
          {specialPrice}
        </span>
        <span className="line-through text-xs text-gray-300 inline-block px-2">
          {regularPrice}
        </span>
      </div>
    );
  }
  return (
    <div className={cx('p-2 flex flex-nowrap items-center')}>
      <span className="text-lg text-gray-800 font-bold">{regularPrice}</span>
    </div>
  );
};

FinalPrice.propTypes = {
  price: PropTypes.shape({
    currency: PropTypes.string,
    regularPriceValue: PropTypes.number,
    regularPrice: PropTypes.string,
    specialPriceValue: PropTypes.node,
    specialPrice: PropTypes.node,
  }),
};

export default FinalPrice;
