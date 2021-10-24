import React from 'react';
import PropTypes from 'prop-types';
import { AppContextProvider } from './AppContext';

const ContextProvider = ({ children }) => {
  return <AppContextProvider>{children}</AppContextProvider>;
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
