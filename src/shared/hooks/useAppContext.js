import { useContext } from 'react';
import { AppContext } from '@/shared/context/AppContext';
import { APP_LOADING } from '../context/actionTypes';

export const useAppContext = () => {
  const { appState, appDispatch } = useContext(AppContext);
  const setAppLoading = (payload) => appDispatch({ type: APP_LOADING, payload });
  return { appState, appDispatch, setAppLoading };
};
