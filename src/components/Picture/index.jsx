import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const Picture = ({
  mobileSrc,
  src,
  desktopSrc,
  alt,
  className,
  imgClassName,
}) => {
  return (
    <picture className={cx('block w-full', className)}>
      <source srcSet={mobileSrc} media="screen and (max-width: 767px)" />
      <source srcSet={desktopSrc} media="screen and (min-width: 768px)" />
      <img
        className={cx('block w-full', imgClassName)}
        src={src || mobileSrc || desktopSrc}
        alt={alt || src}
      />
    </picture>
  );
};

Picture.defaultProps = {
  mobileSrc: '',
  src: '',
  desktopSrc: '',
  alt: '',
  className: '',
  imgClassName: '',
};
Picture.propTypes = {
  mobileSrc: PropTypes.string,
  src: PropTypes.string,
  desktopSrc: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  imgClassName: PropTypes.string,
};

export default Picture;
