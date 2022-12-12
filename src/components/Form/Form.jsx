import React, { useContext, useState} from 'react';
import { TodoContext } from "../../utils/todoContext/index"
import "./form.css"

function Form () {
  const [newTodoValue, setNewTodoValue] = useState("")

  const {
    addTodo,
    setOpenModal,
  } = useContext(TodoContext);

  const onSubmit = (event) => {
    console.log(newTodoValue);
    event.preventDefault(); // cuando el formulario se envia no se recarga la pagina
    // Utilizamos nuestra función para añadir nuestro TODO
    addTodo(newTodoValue);
    // Cerramos nustro modal
    setOpenModal(false);
    // También estaría bien resetear nuestro formulario
    setNewTodoValue('')
  }

  const onCancele = () => {
    setOpenModal(false);  
  }

  const onChange = (event) => {
    console.log(event.target.value);
    setNewTodoValue(event.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu proxima tarea</label>
      <input 
        type="text" 
        placeholder="Escribe tu tarea" 
        value={newTodoValue}
        onChange={onChange}
      />
      <div>
        <button className='cancelar ' type="button" onClick={onCancele}>Cancelar</button>
        <button className='añadir ' type="submit">Añadir</button>
      </div>
    </form>
  );
}

export { Form };