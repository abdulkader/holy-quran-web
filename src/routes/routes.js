import React from 'react';

const lazyPageLoader = (name, file = 'index') =>
  React.lazy(() => import(`../pages/${name}/${file}.jsx`));

export const routes = [
  {
    path: '/',
    exact: true,
    component: lazyPageLoader('Home'),
  },
  {
    path: '/surah/:surahId/:url*',
    exact: true,
    component: lazyPageLoader('Surah'),
  },
  {
    path: '/:url*',
    exact: true,
    component: lazyPageLoader('ErrorPages', 'NotFound404'),
  },
];
