import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Container = (props) => {
  return (
    <div className={cx('w-full px-4', props.className)}>{props.children}</div>
  );
};

Container.defaultProps = { className: '' };
Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Container;
