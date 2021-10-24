import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './Button.module.css';

const Button = ({ className, ...props }) => {
  return (
    <button className={cx(styles.button, className)} {...props}>
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
};
Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
