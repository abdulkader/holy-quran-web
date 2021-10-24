import React from 'react';
import PropTypes from 'prop-types';

const ModalDialog = ({ children }) => {
  return (
    <div className="fixed w-full h-full top-0 left-0 flex justify-center items-center align-middle bg-gray-600 bg-opacity-40">
      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-white p-1">{children}</div>
      </div>
    </div>
  );
};

ModalDialog.propTypes = { children: PropTypes.node };

export default ModalDialog;
