import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import AppRouter from '@/routes/AppRouter';

const Main = () => {
  return (
    <HelmetProvider>
      <AppRouter />
    </HelmetProvider>
  );
};

export default Main;
