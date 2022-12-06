import React from "react"
import "../styles/TodoMessage.css"

function TodoMessage({totalTodos, completedTodos}){
  return (
    <div className="TodoMessage">
      <h4>Lita de tareas 📝</h4>
      <p>Lista de tareas creada por Fernando Dorantes</p>
      <p>Tienes {completedTodos} de {totalTodos} tareas completadas.</p>
    </div>
  )
}

export {TodoMessage}

