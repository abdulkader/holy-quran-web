import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
const HeroWidget = (props) => {
  return (
    <div
      className={cx('w-full flex flex-nowrap justify-between', props.className)}
    >
      <div className="flex w-auto">
        <div className={cx('block', props.imageHolderClass)}>
          <img
            src={props.image}
            alt="Hero 1"
            className={cx(props.imageClass)}
            width={props.imageWidth}
            height={props.imageHeight}
          />
        </div>
      </div>
      <div className="flex flex-1 justify-center align-middle md:p-12 flex-col">
        <h2 className="text-3xl text-green-500">{props.title}</h2>
        <p className="text-sm text-gray-500">{props.description}</p>
      </div>
    </div>
  );
};

HeroWidget.defaultProps = {
  className: '',
  description: '',
  imageClass: 'w-full',
  imageHolderClass: '',
  imageWidth: '',
  imageHeight: '',
};
HeroWidget.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageClass: PropTypes.string,
  imageHolderClass: PropTypes.string,
  imageWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  imageHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default HeroWidget;
