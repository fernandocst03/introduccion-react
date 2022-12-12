import React from "react";
import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvaider(props) {
  const { 
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []); 


  const [openModal, setOpenModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const completedTodos = todos.filter((todo) => !!todo.complete).length;
  const totalTodos = todos.length;
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      complete : false,
      text,
      id: todos.length + 1,
    });
    saveTodos(newTodos);
  };

  const completeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].complete = !newTodos[todoIndex].complete;
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      sincronizeTodos
    }}>{props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext,TodoProvaider };