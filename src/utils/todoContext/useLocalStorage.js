import React from "react"; 

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}));
  const {
    sincronizedItem,
    item,
    loading,
    error,
  } = state;

  const onError = (error) => {
    dispatch({type: actionTypes.error, payload: error})
  }

  const onSuccess = (parsedItem) => {
    dispatch({type: actionTypes.success, payload: parsedItem})
  }

  const onSave = (newItem) => {
    dispatch({type: actionTypes.save, payload: newItem})
  }

  const onSincronize = () => {
    dispatch({type: actionTypes.sincronize})
  }
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

        onSuccess(parsedItem);

      } catch (error) {
        onError(error);
      }
    },2500); // al mandarle un [] como segundo argumento, se ejecuta solo una vez el compoenente
  }, [initialValue, itemName, sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringifyItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifyItem);
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  const sincronizeItem = () => {
    onSincronize();
  }

  return { item, saveItem, loading, error , sincronizeItem};
}

const initialState = ({initialValue}) => ({
  error: false,
  loading: true,
  item: initialValue,
  sincronizedItem: false,
});

const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
  sincronize: "SINCRONIZE",
}

const reducerObject = (state, payload) =>({
  [actionTypes.error]: {
      ...state,
      error: true,
  },
  [actionTypes.success]:{
      ...state,
      error:false,
      sincronizedItem: true,
      loading: false,
      item: payload,
  },
  [actionTypes.save]:{
      ...state,
      item:payload
  },
  [actionTypes.sincronize]:{
      ...state,
      sincronizedItem: false,
      loading: true,
  },
});

const reducer = (state, action) => {
  // eslint-disable-next-line no-unused-expressions
  return reducerObject(state, action.payload)[action.type] || state;
}

export { useLocalStorage };