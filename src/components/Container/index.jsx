import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Container = (props) => {
  return (
    <div className={cx('container px-1 md:px-4 mx-auto', props.className)}>
      {props.children}
    </div>
  );
};

Container.defaultProps = { className: '' };
Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Container;
