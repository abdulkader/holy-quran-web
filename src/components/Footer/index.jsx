import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
  return (
    <div className="flex flex-nowrap justify-between align-middle items-center bg-gray-200 p-3">
      <p className="text-center w-full text-xs font-semibold text-gray-700">
        Made with Love
      </p>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
