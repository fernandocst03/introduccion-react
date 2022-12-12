import React from "react"; 
import { useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);
  const [sincronizedItem, setSincronizedItem] = useState(false);

  React.useEffect(() => {
    setTimeout(() => {  // simulamos un delay de 2.5 segundos al cargar la lista de todos
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
        setSincronizedItem(true);

      } catch (error) {
        setError(error);
      }
    },2500); // al mandarle un [] como segundo argumento, se ejecuta solo una vez el compoenente
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringifyItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifyItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  const sincronizeItem = () => {
    setLoading(true);
    setSincronizedItem(false);
  }

  return { item, saveItem, loading, error , sincronizeItem};
}

export { useLocalStorage };