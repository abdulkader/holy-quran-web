import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Button = (props) => {
  return (
    <button
      className={cx(
        'appearance-none border-none outline-none bg-none shadow-none',
        props.className
      )}
    >
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
