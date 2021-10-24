import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { APP_LOADING, SET_GLOBAL_DATA } from './actionTypes';

export const INITIAL_STATE = {
  loading: true,
  surahs: [],
};

export const APP_REDUCER = (state, action) => {
  switch (action.type) {
    case APP_LOADING: {
      const newState = { ...state, loading: action.payload };
      return newState;
    }
    case SET_GLOBAL_DATA: {
      const newState = {
        ...state,
        surahs: action?.payload?.surahs || [],
        loading: action?.payload?.loading || false,
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};

export const AppContext = createContext(INITIAL_STATE);

export const AppContextProvider = ({ children }) => {
  const [appState, appDispatch] = useReducer(APP_REDUCER, INITIAL_STATE);
  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
