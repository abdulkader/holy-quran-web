import React from 'react';
import MainLayout from '@/components/Layouts/MainLayout';
const Home = () => {
  return (
    <MainLayout>
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-3xl text-center text-primary-500">Welcome Page</h1>
      </div>
    </MainLayout>
  );
};

export default Home;
