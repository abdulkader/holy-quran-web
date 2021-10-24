import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useGlobalData } from '@/shared/hooks/useGlobalData';
import { routes } from './routes';

const AppRouter = () => {
  const { getGlobalData } = useGlobalData();
  useEffect(() => {
    getGlobalData(true);
  }, []);
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          path={route.path}
          exact={route.exact}
          component={route.component}
          key={route.path}
        />
      ))}
    </Switch>
  );
};

export default AppRouter;
