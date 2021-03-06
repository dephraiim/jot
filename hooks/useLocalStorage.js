import { useState, useEffect } from "react";

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const initialValue = localStorage.getItem(key);

    if (!initialValue) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
    }

    setValue(JSON.parse(initialValue));
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, defaultValue]);

  return [value, setValue];
};
