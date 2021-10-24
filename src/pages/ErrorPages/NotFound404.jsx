import React from 'react';
import MainLayout from '@/components/Layouts/MainLayout';
import { useRouter } from '@/shared/hooks/useRouter';
const NotFound404Page = () => {
  const { params } = useRouter();
  return (
    <MainLayout>
      <div className="p-4 bg-gray-100">Not Found page: {params?.url}</div>
    </MainLayout>
  );
};

export default NotFound404Page;
