import { LocalStore } from '@/shared/storage';
import { GLOBAL_DATA_KEY } from '@/shared/constants';
import { SET_GLOBAL_DATA } from '@/shared/context/actionTypes';
import { useAppContext } from './useAppContext';
import { useFetch } from './useFetch';

export const useGlobalData = () => {
  const client = useFetch({});
  const { appDispatch } = useAppContext();
  const getGlobalData = async (force = false) => {
    const localData = LocalStore.get(GLOBAL_DATA_KEY) || null;
    if (!force && localData) {
      appDispatch({ type: SET_GLOBAL_DATA, payload: localData });
    }
    if (force || !localData) {
      const response = await client
        .get('quran/ar.alafasy')
        .catch((error) => console.log(error));
      if (response?.data?.status) {
        appDispatch({
          type: SET_GLOBAL_DATA,
          payload: { ...response?.data?.data, loading: false },
        });
        LocalStore.set(GLOBAL_DATA_KEY, response?.data?.data);
      }
    }
  };
  return { getGlobalData };
};
