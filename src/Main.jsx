import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '@/routes/AppRouter';
import ContextProvider from '@/shared/context/ContextProvider';

const Main = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ContextProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <AppRouter />
          </Suspense>
        </ContextProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default Main;
