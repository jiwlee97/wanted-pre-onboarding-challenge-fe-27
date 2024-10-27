export const useLocalStorage = <T>(key: string) => {
  const setItem = (value: T): void => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      window.console.log(error);
    }
  };

  const getItem = (): T | undefined => {
    try {
      const item = window.localStorage.getItem(key);

      if (item === null) return undefined;

      return JSON.parse(item);
    } catch (error) {
      window.console.log(error);

      return undefined;
    }
  };

  const removeItem = (): void => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      window.console.log(error);
    }
  };

  return { setItem, getItem, removeItem };

}