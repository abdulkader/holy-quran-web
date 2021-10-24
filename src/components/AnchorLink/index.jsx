import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AnchorLink = ({ href, children, target, rel, className, onClick }) => {
  return (
    <Link
      to={href}
      className={className}
      target={target}
      rel={rel}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

AnchorLink.defaultProps = {
  className: '',
  target: '_self',
  rel: 'follow',
  onClick: () => {},
};

AnchorLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string,
  onClick: PropTypes.func,
};

export default AnchorLink;
