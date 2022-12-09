import React from "react";
import { useContext } from "react";
// importamos los componentes
import { TodoCounter } from "./components/TodoCounter.jsx";
import { TodoSearch } from "./components/TodoSearch.jsx";
import { TodoList } from "./components/TodoList.jsx";
import { TodoItem } from "./components/TodoItem.jsx";
import { CreateTodoButtom } from "./components/CreateTodoButtom.jsx";
import { TodoInfo } from "./components/TodoInfo.jsx";
import { TodoLisContainer } from "./components/TodoLisContainer.jsx";
import { Modal } from "./components/Modal.jsx";
import { Form } from "./components/Form.jsx";
import { TodoHeader } from "./components/TodoHeader.jsx";
import { TodoMessage } from "./components/TodoMessage.jsx";
import { TodoContext } from "./utils/todoContext";
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
        <TodoHeader>
          <TodoMessage
            totalTodos={totalTodos}
            completedTodos={completedTodos}
          />
        </TodoHeader>
        <TodoList 
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}

        onError={() => <p>Error</p>}
        onLoading={() => <p>Loading...</p>}
        onEmptyTodos={() => <p>¡Crea tu primer TODO!</p>}

        render={(todo) => (
          <TodoItem
          error={error}
          loading={loading}

          key={todo.id}
          text={todo.text}
          complete={todo.complete}
          onComplete={() => completeTodo(todo.id)}
          onDelete={() => deleteTodo(todo.id)}
        />
        )}
        />
        
        
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
