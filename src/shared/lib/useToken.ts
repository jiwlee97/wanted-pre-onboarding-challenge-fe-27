import { useLocalStorage } from "@/shared/lib";

const TOKEN_KEY = 'token';

export const useToken = () => {
  const { getItem, setItem, removeItem } = useLocalStorage(TOKEN_KEY);

  return {
    getToken: getItem,
    setToken: setItem,
    removeToken: removeItem,
  };
}