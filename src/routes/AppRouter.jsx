import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { routes } from './routes';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          {routes.map((route) => (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
              key={route.path}
            />
          ))}
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
