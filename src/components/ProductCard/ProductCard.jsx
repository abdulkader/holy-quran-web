import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import ImageSlider from '@/components/ImageSlider';
import AnchorLink from '@/components/AnchorLink';
import RatingStar from '@/components/RatingStar';
import CardTitle from './CardTitle';
import FinalPrice from './FinalPrice';

import styles from './ProductCard.module.css';

const ProductCard = ({ data }) => {
  const {
    id,
    urlKey,
    name,
    mediaGallery = [],
    price,
    ratingSummary = 0,
  } = data;
  return (
    <div className="w-1/2 p-1 md:w-1/4 lg:w-1/6 md:p-2">
      <div className={cx(styles.productCardHolder)}>
        <div className="block">
          <div className="block">
            <ImageSlider data={mediaGallery || []} />
          </div>
          <AnchorLink href={`/product/${id}/${urlKey}`}>
            <CardTitle id={id} urlKey={urlKey} name={name} />
          </AnchorLink>
        </div>
        <AnchorLink href={`/product/${id}/${urlKey}`}>
          <div className={'flex flex-nowrap items-center justify-between'}>
            <FinalPrice price={price} />
            <RatingStar rating={ratingSummary} />
          </div>
        </AnchorLink>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProductCard;
