import React from "react";
import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvaider(props) {
  const { 
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []); 

  // estado inicial del modal
  const [openModal, setOpenModal] = useState(false);
  // estado inicial del buscador
  const [searchValue, setSearchValue] = useState("");
  // estado inicial del contador de tareas completadas
  const completedTodos = todos.filter((todo) => !!todo.complete).length;
  const totalTodos = todos.length;
  // array para guardar los todos que coincidan con el valor del buscador
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
    // buscamos la posicion del todo que coincida con el id
    const newTodos = [...todos];
    newTodos.push({
      complete : false,
      text,
      id: todos.length + 1,
    });
    saveTodos(newTodos);
  };

  const completeTodo = (id) => {
    // buscamos la posicion del todo que coincida con el id
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
    }}>{props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext,TodoProvaider };