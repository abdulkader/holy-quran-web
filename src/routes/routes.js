import React from 'react';

const lazyLoader = name => React.lazy(() => import(`../pages/${name}/index.jsx`));

export const routes = [
  {
    path: '/',
    exact: true,
    component: lazyLoader('Home'),
  },
  {
    path: '/about-us',
    exact: true,
    component: lazyLoader('About'),
  },
];
