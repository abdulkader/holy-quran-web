import { useLocation } from 'react-router';

export const useLocationQuery = () => {
  return new URLSearchParams(useLocation().search);
};