import { useState } from 'react';
import { useFetch } from './useFetch';

export const useCategoryData = () => {
  const client = useFetch({});
  const [categoryData, setCategoryData] = useState(null);
  const getCategoryData = async (categoryId) => {
    const response = await client
      .post(`/catalog/getCategoryAndProductsList/${categoryId}`)
      .catch((error) => console.log(error));
    if (response?.data?.status && response?.data?.data) {
      setCategoryData(response?.data?.data);
    }
    return response?.data;
  };
  return { getCategoryData, categoryData };
};
