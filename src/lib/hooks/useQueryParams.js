import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { useState, useEffect } from 'react';

export const useQueryParams = () => {
  const [query, setQuery] = useState({});
  const search = useLocation().search;
  useEffect(() => {
    setQuery(qs.parse(search, { ignoreQueryPrefix: true }));
  }, [search]);
  return query;
};
