
import { useState, useEffect } from 'react';
import AuthStorage from 'lib/storage/AuthStorage';
import appconfig from 'config';
import {
  loginByUsername,
  fetchUserProfile,
  refreshNewAuthToken,
} from 'services/Auth.service';
import { setUserIsAuthenticated } from 'store/slices/app';
import { setCurrentUser } from 'store/slices/user';
import { useRouter } from './useRouter';
import { handleAPIError } from 'lib/utils/index';
import { useAppDispatch } from './useAppDispatch';

const auth = appconfig.auth;

const { key: AUTH_KEY } = auth;

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const resetAuth = () => {
    dispatch(setUserIsAuthenticated(false));
    dispatch(setCurrentUser(null));
  };

  const logout = (redirect = true, callback) => {
    AuthStorage.remove(AUTH_KEY);
    setIsAuthenticated(false);
    setLoading(false);
    resetAuth();
    if (callback) callback();
    if (redirect) router.push('/auth/login');
  };

  const login = async (payload, callback) => {
    setLoading(true);
    try {
      const { response, error } = await loginByUsername(
        payload.username,
        payload.password
      );
      if (error) {
        setIsAuthenticated(false);
        setLoading(false);
        resetAuth();
        return error;
      }
      setLoading(false);
      if (response.data && response.data.access) {
        // auth success
        AuthStorage.set(AUTH_KEY, response.data);
        setIsAuthenticated(true);
        dispatch(setUserIsAuthenticated(true));
        fetchProfile();
        if (callback) callback(response.data);
        router.push('/');
      }
      return response.data;
    } catch (error) {
      // auth fail
      // @TODO Add error logging
      setIsAuthenticated(false);
      setLoading(false);
      resetAuth();
      return error;
    }
  };

  const refreshToken = async () => {
    try {
      const authData = AuthStorage.get(AUTH_KEY);
      if (authData && authData?.refresh) {
        const { response, error } = await refreshNewAuthToken(
          authData?.refresh
        );
        if (error && error.statusCode === 403) {
          // FORBIDDEN = 403
          // clear all session and storage
          handleAPIError(error);
          logout();
        }
        if (response.data && response.data.access) {
          // auth success
          AuthStorage.set(AUTH_KEY, response.data);
          fetchProfile();
        }
      }
    } catch (error) {
      return error;
    }
  };

  const fetchProfile = async () => {
    try {
      const { response, error } = await fetchUserProfile();
      if (error && error.statusCode === 401) {
        // Unauthorized = 401
        // retry fetch token with refresh token
        refreshToken();
        return;
      }
      if (error && error.statusCode === 403) {
        // FORBIDDEN = 403
        // clear all session and storage
        handleAPIError(error);
        logout();
      }
      if (response && response.data) {
        // dispatch state update
        dispatch(setCurrentUser(response.data));
      }
      return response.data;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    let isMounted = true;
    const loggedIn = AuthStorage.get(AUTH_KEY);
    if (loggedIn && loggedIn?.access && isMounted) {
      setIsAuthenticated(true);
      dispatch(setUserIsAuthenticated(true));
    }
    if (isMounted) {
      setLoading(false);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return { isAuthenticated, login, logout, loading, fetchProfile, resetAuth };
};
