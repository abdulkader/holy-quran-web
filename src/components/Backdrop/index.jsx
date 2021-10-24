import React from 'react';
import PropTypes from 'prop-types';

const Backdrop = ({ onClose }) => {
  return (
    <div onClick={onClose} className="fixed w-full h-full z-20 top-0 left-0 bg-white bg-opacity-40 backdrop-filter backdrop-blur-3xl" />
  );
};

Backdrop.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Backdrop;
