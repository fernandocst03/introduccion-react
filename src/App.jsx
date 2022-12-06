import React from "react";
import { useContext } from "react";
import { TodoCounter } from "./components/TodoCounter.jsx";
import { TodoSearch } from "./components/TodoSearch.jsx";
import { TodoList } from "./components/TodoList.jsx";
import { TodoItem } from "./components/TodoItem.jsx";
import { CreateTodoButtom } from "./components/CreateTodoButtom.jsx";
import { TodoInfo } from "./components/TodoInfo.jsx";
import { TodoLisContainer } from "./components/TodoLisContainer.jsx";
import { TodoMessage } from "./components/TodoMessage.jsx";
import { TodoContext } from "./utils/todoContext";
import { Modal } from "./components/Modal.jsx";
import { Form } from "./components/Form.jsx";
import "./styles/App.css";

function App() {
  const {
    searchValue,
    setSearchValue,
    totalTodos,
    completedTodos,
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <>
      <TodoInfo>
        <TodoCounter />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoInfo>
      <TodoLisContainer>
        <TodoMessage
          // enviamos los datos de las tareas completadas y el total de tareas
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoList>
          {error && <p>Hubo un error</p>}
          {loading && <p>Estamos cargando...</p>}
          {!loading && !searchedTodos.length && <p>Crea tu primer TODO</p>}

          {searchedTodos.map((todo) => (
            <TodoItem
              error={error}
              loading={loading}
              key={todo.id}
              text={todo.text}
              complete={todo.complete}
              onComplete={() => completeTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
            />
          ))}
        </TodoList>
        
        {!!openModal && (
          <Modal>
            <Form></Form>
          </Modal>
        )}

        <CreateTodoButtom 
          setOpenModal={setOpenModal}
        />
      </TodoLisContainer>
    </>
  );
}
export default App;
