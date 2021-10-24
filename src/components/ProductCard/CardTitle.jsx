import React from 'react';
import PropTypes from 'prop-types';

const CardTitle = ({ name }) => {
  return (
    <div className="px-2 pt-2 md:pt-4">
      <h3 className="text-left font-semibold text-sm text-gray-800">{name}</h3>
    </div>
  );
};

CardTitle.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CardTitle;
