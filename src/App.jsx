import React from "react";
import { TodoCounter } from "./components/TodoCounter.jsx";
import { TodoSearch } from "./components/TodoSearch.jsx";
import { TodoList } from "./components/TodoList.jsx";
import { TodoItem } from "./components/TodoItem.jsx";
import { CreateTodoButtom } from "./components/CreateTodoButtom.jsx";
import { TodoInfo } from "./components/TodoInfo.jsx";
import { TodoLisContainer} from "./components/TodoLisContainer.jsx";
import { TodoMessage } from "./components/TodoMessage.jsx";
import "./styles/App.css";

const todos = [
  {
    text: "Cortar cebolla",
    complete: "false",
  },
  {
    text: "Comprar comida",
    complete: "false",
  },
  {
    text: "Hacer tareas",
    complete: "false",
  },
  {
    text: "Limpiar la casa",
    complete: "false",
  },
  {
    text: "Lavar el carro",
    complete: "false",
  },
];

function App() {
  return (
    <>
      <TodoInfo>
        <TodoCounter />
        <TodoSearch />
      </TodoInfo>
      <TodoLisContainer>
        <TodoMessage />
        <TodoList>
          {todos.map((todo) => (
            <TodoItem key={todo.text} text={todo.text} />
          ))}
        </TodoList>
        <CreateTodoButtom />
      </TodoLisContainer>
    </>
  );
}

export default App;

